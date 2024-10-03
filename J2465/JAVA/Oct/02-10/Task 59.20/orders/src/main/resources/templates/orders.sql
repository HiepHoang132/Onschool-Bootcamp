-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2024 at 05:42 PM
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
-- Database: `pizza_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `order_code` varchar(255) DEFAULT NULL,
  `paid` bigint(20) DEFAULT NULL,
  `pizza_size` varchar(255) DEFAULT NULL,
  `pizza_type` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `voucher_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `order_code`, `paid`, `pizza_size`, `pizza_type`, `price`, `product_id`, `voucher_code`) VALUES
(1, 1, 'ORD001', 200000, 'Large', 'Margherita', 200000, 201, 'DISC10'),
(2, 2, 'ORD002', 180000, 'Medium', 'Pepperoni', 180000, 202, NULL),
(3, 3, 'ORD003', 150000, 'Small', 'BBQ Chicken', 150000, 203, 'OFF5'),
(4, 4, 'ORD004', 220000, 'Large', 'Hawaiian', 220000, 204, NULL),
(5, 5, 'ORD005', 170000, 'Medium', 'Veggie Supreme', 170000, 205, 'DISC15'),
(6, 6, 'ORD006', 160000, 'Small', 'Four Cheese', 160000, 206, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
