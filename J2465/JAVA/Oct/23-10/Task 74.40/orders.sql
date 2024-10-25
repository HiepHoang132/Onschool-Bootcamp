CREATE TABLE `users` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `user_name` VARCHAR(100) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_user_name` (`user_name`),
    UNIQUE KEY `un_email` (`email`)
) ENGINE = InnoDB;

CREATE TABLE `vouchers` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `voucher_code` VARCHAR(40) NOT NULL,
    `discount` INT NOT NULL,
    `is_used_yn` CHAR(1) NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_voucher_code` (`voucher_code`)
) ENGINE = InnoDB;

CREATE TABLE `drinks` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `drink_code` VARCHAR(40) NOT NULL,
    `drink_name` VARCHAR(40) NOT NULL,
    `total_money` INT NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_drink_code` (`drink_code`)
) ENGINE = InnoDB;

CREATE TABLE `status` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `status_code` VARCHAR(40) NOT NULL,
    `status_name` VARCHAR(40) NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_status_code` (`status_code`)
) ENGINE = InnoDB;

CREATE TABLE `orders` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `order_code` VARCHAR(40) NOT NULL,
    `pizza_size` VARCHAR(40) NOT NULL,
    `pizza_type` VARCHAR(40) NOT NULL,
    `voucher_id` INT UNSIGNED NOT NULL,
    `total_money` INT NOT NULL,
    `discount` INT,
    `fullname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100),
    `address` VARCHAR(200) NOT NULL,
    `drink_id` INT UNSIGNED NOT NULL,
    `status_id` INT UNSIGNED NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`voucher_id`) REFERENCES `vouchers`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    UNIQUE KEY `un_order_code` (`order_code`)
) ENGINE = InnoDB;

INSERT INTO `users` (`user_name`, `first_name`, `last_name`, `email`, `password`, `create_date`, `update_date`) VALUES
('jdoe', 'John', 'Doe', 'jdoe@example.com', 'password123', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('asmith', 'Alice', 'Smith', 'asmith@example.com', 'password123', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('bwilliams', 'Bob', 'Williams', 'bwilliams@example.com', 'password123', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('cjohnson', 'Cathy', 'Johnson', 'cjohnson@example.com', 'password123', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('dlee', 'David', 'Lee', 'dlee@example.com', 'password123', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `vouchers` (`voucher_code`, `discount`, `is_used_yn`, `create_date`, `update_date`) VALUES
('VOUCHER1', 10, 'N', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('VOUCHER2', 15, 'N', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('VOUCHER3', 20, 'Y', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('VOUCHER4', 5, 'N', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('VOUCHER5', 25, 'Y', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `drinks` (`drink_code`, `drink_name`, `total_money`, `create_date`, `update_date`) VALUES
('DRINK1', 'Coke', 15000, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('DRINK2', 'Pepsi', 14000, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('DRINK3', 'Sprite', 13000, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('DRINK4', 'Fanta', 16000, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('DRINK5', '7UP', 15500, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `status` (`status_code`, `status_name`, `create_date`, `update_date`) VALUES
('PENDING', 'Pending', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('COMPLETED', 'Completed', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('CANCELLED', 'Cancelled', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('IN_PROGRESS', 'In Progress', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('RETURNED', 'Returned', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `orders` (`order_code`, `pizza_size`, `pizza_type`, `voucher_id`, `total_money`, `discount`, `fullname`, `email`, `address`, `drink_id`, `status_id`, `create_date`, `update_date`) VALUES
('ORDER1', 'Medium', 'Pepperoni', 1, 60000, 10, 'John Doe', 'jdoe@example.com', '123 Main St', 1, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('ORDER2', 'Large', 'Veggie', 2, 55000, 15, 'Alice Smith', 'asmith@example.com', '456 Maple St', 2, 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('ORDER3', 'Small', 'Cheese', 5, 45000, NULL, 'Bob Williams', 'bwilliams@example.com', '789 Elm St', 3, 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('ORDER4', 'Medium', 'Hawaiian', 3, 70000, 20, 'Cathy Johnson', 'cjohnson@example.com', '101 Pine St', 4, 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('ORDER5', 'Large', 'BBQ Chicken', 4, 65000, 5, 'David Lee', 'dlee@example.com', '202 Birch St', 5, 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
