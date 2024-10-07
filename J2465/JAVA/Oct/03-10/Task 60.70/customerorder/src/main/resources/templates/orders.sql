-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 07, 2024 at 09:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizza2_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `order_code` varchar(255) DEFAULT NULL,
  `paid` bigint(20) DEFAULT NULL,
  `pizza_size` varchar(255) DEFAULT NULL,
  `pizza_type` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `voucher_code` varchar(255) DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_code`, `paid`, `pizza_size`, `pizza_type`, `price`, `voucher_code`, `customer_id`) VALUES
(1, 'ORD123', 1500, 'Large', 'Pepperoni', 1500, NULL, 1),
(2, 'ORD124', 1100, 'Medium', 'Cheese', 1200, 'DISC10', 1),
(3, 'ORD125', 1000, 'Small', 'Vegetarian', 1000, NULL, 2),
(4, 'ORD126', 1600, 'Large', 'BBQ Chicken', 1600, NULL, 2),
(5, 'ORD127', 1200, 'Medium', 'Mushroom', 1300, 'DISCOUNT15', 3),
(6, 'ORD128', 1400, 'Large', 'Margherita', 1400, NULL, 4),
(7, 'ORD129', 900, 'Small', 'Hawaiian', 900, 'OFFER20', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK624gtjin3po807j3vix093tlf` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK624gtjin3po807j3vix093tlf` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
