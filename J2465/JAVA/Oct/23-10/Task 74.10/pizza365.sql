CREATE TABLE `pizza365`.`users` ( 
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
    `user_name` VARCHAR(40) NOT NULL , 
    `first_name` VARCHAR(50) NOT NULL , 
    `last_name` VARCHAR(40) NOT NULL , 
    `email` VARCHAR(100) NOT NULL , 
    `role_id` INT NOT NULL , 
    `create_date` INT NOT NULL , 
    `update_date` INT NOT NULL , 
    PRIMARY KEY (`id`), 
    UNIQUE `un_username` (`user_name`),
    UNIQUE `un_email` (`email`)
) ENGINE = InnoDB;

CREATE TABLE `pizza365`.`roles` ( 
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
    `role_code` VARCHAR(40) NOT NULL , 
    `role_name` VARCHAR(40) NOT NULL , 
    `create_date` INT NOT NULL , 
    `update_date` INT NOT NULL , 
    PRIMARY KEY (`id`), 
    UNIQUE `un_role_code` (`role_code`)
) ENGINE = InnoDB;

ALTER TABLE `users` 
    CHANGE `role_id` `role_id` INT(11) UNSIGNED NOT NULL;
ALTER TABLE `users` 
    ADD CONSTRAINT `FK_role_id` 
    FOREIGN KEY (`role_id`) 
    REFERENCES `roles`(`id`) 
    ON DELETE RESTRICT ON UPDATE RESTRICT;

-- Insert roles
INSERT INTO `pizza365`.`roles` (`role_code`, `role_name`, `create_date`, `update_date`) VALUES
('ADMIN', 'Administrator', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('USER', 'Standard User', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('MOD', 'Moderator', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('GUEST', 'Guest User', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('SUPPORT', 'Support Staff', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- Insert users
INSERT INTO `pizza365`.`users` (`user_name`, `first_name`, `last_name`, `email`, `role_id`, `create_date`, `update_date`) VALUES
('jdoe', 'John', 'Doe', 'jdoe@example.com', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('asmith', 'Alice', 'Smith', 'asmith@example.com', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('bwhite', 'Bob', 'White', 'bwhite@example.com', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('cmiller', 'Charlie', 'Miller', 'cmiller@example.com', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('dgreen', 'Dana', 'Green', 'dgreen@example.com', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
