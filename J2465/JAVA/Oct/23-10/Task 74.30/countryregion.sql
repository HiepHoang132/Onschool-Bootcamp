CREATE TABLE `countries` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `country_code` VARCHAR(40) NOT NULL,
    `country_name` VARCHAR(40) NOT NULL,
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `un_country_code` (`country_code`)
) ENGINE = InnoDB;

CREATE TABLE `regions` (
    `id` INT UNSIGNED AUTO_INCREMENT, 
    `region_code` VARCHAR(40) NOT NULL,
    `region_name` VARCHAR(40) NOT NULL,
    `country_id` INT UNSIGNED NOT NULL,  
    `create_date` INT NOT NULL,
    `update_date` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    UNIQUE KEY `un_region_code` (`region_code`)  
) ENGINE = InnoDB;

INSERT INTO `countries` (`country_code`, `country_name`, `create_date`, `update_date`) VALUES
('VN', 'Vietnam', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('US', 'United States', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('FR', 'France', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('DE', 'Germany', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
('JP', 'Japan', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO `regions` (`region_code`, `region_name`, `country_id`, `create_date`, `update_date`) VALUES
('SE', 'Southeast', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),  
('NE', 'Northeast', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),  
('CE', 'Central', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),     
('WE', 'Western', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),    
('EE', 'Eastern', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());      
