CREATE TABLE `subjects` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `subject_code` VARCHAR(50) NOT NULL,
    `subject_name` VARCHAR(50) NOT NULL,
    `credit` INT NOT NULL, 
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `un_subject_code` (`subject_code`)
) ENGINE = InnoDB;

CREATE TABLE `students` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `student_code` VARCHAR(50) NOT NULL,
    `user_name` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL, 
    `last_name` VARCHAR(50) NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE `un_student_code` (`student_code`),
    UNIQUE `un_user_name` (`user_name`)
) ENGINE = InnoDB;

CREATE TABLE `grades` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `student_id` INT UNSIGNED NOT NULL,
    `subject_id` INT UNSIGNED NOT NULL,
    `grade` INT NOT NULL, 
    `exam_date` INT NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_student_subject` (`student_id`, `subject_id`), -- Composite unique key
    FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

INSERT INTO `subjects` (`subject_code`, `subject_name`, `credit`, `create_date`, `update_date`) VALUES
('MATH101', 'Mathematics I', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('ENG102', 'English Literature', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('PHY103', 'Physics', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('CHEM104', 'Chemistry', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('BIO105', 'Biology', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `students` (`student_code`, `user_name`, `first_name`, `last_name`, `create_date`, `update_date`) VALUES
('STU001', 'jdoe', 'John', 'Doe', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('STU002', 'asmith', 'Alice', 'Smith', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('STU003', 'bwayne', 'Bruce', 'Wayne', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('STU004', 'ckent', 'Clark', 'Kent', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('STU005', 'dparker', 'Diana', 'Parker', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `grades` (`student_id`, `subject_id`, `grade`, `exam_date`, `create_date`, `update_date`) VALUES
(1, 1, 85, UNIX_TIMESTAMP(), UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 2, 90, UNIX_TIMESTAMP(), UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, 3, 75, UNIX_TIMESTAMP(), UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 4, 88, UNIX_TIMESTAMP(), UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(5, 5, 92, UNIX_TIMESTAMP(), UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
