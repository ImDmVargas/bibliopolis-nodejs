# bibliopolis-nodejs

### Script para las tablas (bibliopolisdb)

```sql
CREATE TABLE `students` (
  `id` varchar(10) PRIMARY KEY,
  `name` varchar(40) NOT NULL,
  `lastname` varchar(40) NOT NULL,
  `email` varchar(80) UNIQUE NOT NULL,
  `career_id` int NOT NULL
);

CREATE TABLE `librarians` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `lastname` varchar(40) NOT NULL,
  `email` varchar(80) UNIQUE NOT NULL,
  `rol_id` int NOT NULL
);

CREATE TABLE `roles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(40) NOT NULL
);

CREATE TABLE `books` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `author` varchar(200) NOT NULL,
  `isbn` varchar(15) NOT NULL,
  `units` int NOT NULL,
  `image_name` varchar(200) NOT NULL,
  `editorial_id` int NOT NULL
);

CREATE TABLE `careers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL
);

CREATE TABLE `editorials` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL
);

CREATE TABLE `loans` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` ENUM ('active', 'expired', 'returned', 'cancelled', 'pending') NOT NULL,
  `student_id` varchar(10) NOT NULL,
  `book_id` int NOT NULL
);

CREATE TABLE `tags` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL
);

ALTER TABLE `students` ADD FOREIGN KEY (`career_id`) REFERENCES `careers` (`id`);

ALTER TABLE `librarians` ADD FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);

ALTER TABLE `books` ADD FOREIGN KEY (`editorial_id`) REFERENCES `editorials` (`id`);

ALTER TABLE `loans` ADD FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

ALTER TABLE `loans` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

CREATE TABLE `books_tags` (
  `books_id` int,
  `tags_id` int,
  PRIMARY KEY (`books_id`, `tags_id`)
);

ALTER TABLE `books_tags` ADD FOREIGN KEY (`books_id`) REFERENCES `books` (`id`);

ALTER TABLE `books_tags` ADD FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`);

-- Insertar datos de ejemplo

INSERT INTO roles (id, name) VALUES
(1, 'Admin'),
(2, 'Bibliotecario');

INSERT INTO librarians (name, lastname, email, rol_id) VALUES
('María', 'López', 'maria.lopez@example.com', 1),
('Luis', 'Gomez', 'luis@example.com', 1),
('Juan', 'García', 'juan.garcia@example.com', 2),
('Carlos', 'Martínez', 'carlos.martinez@example.com', 2),
('Laura', 'Rodríguez', 'laura.rodriguez@example.com', 2);

INSERT INTO careers (name) VALUES
('Software'),
('Biomédica'),
('Biotecnología'),
('Finanzas'),
('Administración'),
('Terapia Física');

INSERT INTO students (id, name, lastname, email, career_id) VALUES
('202400000', 'Valentina', 'Torres', 'valentina.torres@estudiantes.mx', 1),
('202400001', 'Ana', 'González', 'ana.gonzalez@estudiantes.mx', 2),
('202400002', 'Luis', 'Rodríguez', 'luis.rodriguez@estudiantes.mx', 3),
('202400003', 'María', 'Martínez', 'maria.martinez@estudiantes.mx', 4),
('202400004', 'Carlos', 'Hernández', 'carlos.hernandez@estudiantes.mx', 5),
('202400005', 'Laura', 'López', 'laura.lopez@estudiantes.mx', 6),
('202400006', 'Diego', 'García', 'diego.garcia@estudiantes.mx', 1),
('202400007', 'Daniela', 'Sánchez', 'daniela.sanchez@estudiantes.mx', 2),
('202400008', 'Jorge', 'Díaz', 'jorge.diaz@estudiantes.mx', 3),
('202400009', 'Sofía', 'Moreno', 'sofia.moreno@estudiantes.mx', 4),
('202400010', 'David', 'Jiménez', 'david.jimenez@estudiantes.mx', 5),
('202400011', 'Sara', 'Ruiz', 'sara.ruiz@estudiantes.mx', 6),
('202400012', 'Alejandro', 'Romero', 'alejandro.romero@estudiantes.mx', 1),
('202400013', 'Patricia', 'Torres', 'patricia.torres@estudiantes.mx', 2),
('202400014', 'Manuel', 'Alvarez', 'manuel.alvarez@estudiantes.mx', 3),
('202400015', 'Lucía', 'Gutiérrez', 'lucia.gutierrez@estudiantes.mx', 4);

INSERT INTO editorials (name) VALUES
('Penguin Random House'),
('Anagrama'),
('Sexto Piso'),
('Sudamericana'),
('Bloomsbury'),
('Santillana'),
('Edición B'),
('Alpha'),
('Grijalbo'),
('Gamma'),
('Planeta México');

INSERT INTO tags (name) VALUES
('Ficción'),
('Ciencia'),
('Historia'),
('Biografía'),
('Tecnología'),
('Novela Histórica'),
('Finanzas'),
('Filosofía'),
('Misterio');

INSERT INTO books (title, author, isbn, units, image_name, editorial_id) VALUES
('Cien años de soledad', 'Gabriel García Márquez', '9788483104616', 10, 'cien_anos_soledad.jpg', 1),
('El Señor de los Anillos: La Comunidad del Anillo', 'J.R.R. Tolkien', '9788447213039', 15, 'comunidad_anillo.jpg', 3),
('Los siete hábitos de la gente altamente efectiva', 'Stephen Covey', '9788429160368', 9, 'siete_habitos.jpg', 10),
('Pequeño cerdo capitalista', 'Sofia Macías', '9788408089232', 8, 'pequeno_cerdo.jpg', 10),
('La metamorfosis', 'Franz Kafka', '9788420472234', 6, 'metamorfosis.jpg', 6),
('1984', 'George Orwell', '9788499890944', 12, '1984.jpg', 5),
('Orgullo y prejuicio', 'Jane Austen', '9788497940936', 10, 'orgullo_prejuicio.jpg', 2),
('Harry Potter y la piedra filosofal', 'J.K. Rowling', '9788478884451', 20, 'harry_potter_piedra_filosofal.jpg', 4),
('El Principito', 'Antoine de Saint-Exupéry', '9788424914987', 18, 'principito.jpg', 7),
('El nombre del viento', 'Patrick Rothfuss', '9788401352836', 14, 'nombre_viento.jpg', 8),
('El Alquimista', 'Paulo Coelho', '9780062511409', 13, 'el_alquimista.jpg', 10),
('Las aventuras de Sherlock Holmes', 'Arthur Conan Doyle', '9788497940875', 16, 'sherlock_holmes.jpg', 2),
('El retrato de Dorian Gray', 'Oscar Wilde', '9788497940745', 10, 'retrato_dorian_gray.jpg', 2),
('La Odisea', 'Homero', '9788435061001', 8, 'la_odisea.jpg', 1),
('El lobo estepario', 'Hermann Hesse', '9788420679408', 6, 'lobo_estepario.jpg', 6);

INSERT INTO books_tags (books_id, tags_id) VALUES
(1, 1),
(1, 6),
(2, 1),
(2, 5),
(3, 7),
(3, 8),
(4, 7),
(4, 8),
(5, 1),
(6, 1),
(6, 2),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 7),
(11, 8),
(12, 1),
(12, 9),
(13, 1),
(14, 3),
(15, 1);

INSERT INTO `loans` (`start_date`, `end_date`, `status`, `student_id`, `book_id`) VALUES
('2024-03-01', '2024-03-15', 'returned', '202400001', 1),
('2024-03-02', '2024-03-16', 'returned', '202400001', 2),
('2024-03-03', '2024-03-17', 'expired', '202400002', 3),
('2024-03-04', '2024-03-18', 'cancelled', '202400003', 4),
('2024-03-24', '2024-03-30', 'active', '202400004', 5),
('2024-03-24', '2024-03-30', 'active', '202400005', 9),
('2024-03-27', '2024-04-11', 'pending', '202400006', 10),
('2024-03-27', '2024-04-11', 'pending', '202400007', 12);

-- PROCEDIMIENTOS ALMACENADOS

-- STUDENTS

-- 1
DELIMITER $$
CREATE PROCEDURE spGetStudents()
BEGIN
  SELECT *
  FROM students;
END$$
DELIMITER ;

-- 2
DELIMITER $$
CREATE PROCEDURE spGetStudentById(
  IN studentId VARCHAR(10)
)
BEGIN
  SELECT *
  FROM students
  WHERE id = studentId;
END$$
DELIMITER ;

-- 3
DELIMITER $$
CREATE PROCEDURE spCreateStudent(
	IN studentId VARCHAR(10),
  IN studentName VARCHAR(40),
  IN studentLastname VARCHAR(40),
  IN studentEmail VARCHAR(80),
  IN studentCareerId INT
)
BEGIN
  INSERT INTO
  students (id, name, lastname, email, career_id)
  VALUES (studentId, studentName, studentLastname, studentEmail, studentCareerId);
END$$
DELIMITER ;

-- 4
DELIMITER $$
CREATE PROCEDURE spUpdateStudent(
	IN studentId VARCHAR(10),
	IN studentName VARCHAR(40),
	IN studentLastname VARCHAR(40),
	IN studentEmail VARCHAR(80),
	IN studentCareerId INT
)
BEGIN
	UPDATE students
	SET
	name = IF(studentName IS NOT NULL, studentName, name),
	lastname = IF(studentLastname IS NOT NULL, studentLastname, lastname),
	email = IF(studentEmail IS NOT NULL, studentEmail, email),
	career_id = IF(studentCareerId IS NOT NULL, studentCareerId, career_id)
	WHERE id = studentId;
END$$
DELIMITER ;

-- 5
DELIMITER $$
CREATE PROCEDURE spDeleteStudent(
	IN studentId VARCHAR(10)
)
BEGIN
	DELETE
  FROM students
	WHERE id = studentId;
END$$
DELIMITER ;
```
