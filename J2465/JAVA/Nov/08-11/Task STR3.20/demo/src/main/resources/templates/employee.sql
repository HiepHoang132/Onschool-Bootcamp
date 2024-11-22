-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2024 at 10:08 AM
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
-- Database: `1311_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL,
  `department` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `salary` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `age`, `department`, `name`, `salary`) VALUES
(1, 30, 'IT', 'John Doe', 7500),
(2, 25, 'Finance', 'Jane Smith', 6000),
(3, 35, 'IT', 'Alice Johnson', 8500),
(4, 28, 'Human Resources', 'Bob Brown', 5000),
(5, 22, 'Engineering', 'Liam Walker', 52000),
(6, 27, 'Marketing', 'Olivia Evans', 48000),
(7, 35, 'Finance', 'Noah Scott', 67000),
(8, 29, 'HR', 'Emma Carter', 49000),
(9, 33, 'Operations', 'Ava Peterson', 75000),
(10, 26, 'Engineering', 'Sophia Nelson', 54000),
(11, 31, 'Marketing', 'Mason Turner', 46000),
(12, 24, 'Finance', 'Isabella Kelly', 62000),
(13, 28, 'HR', 'Lucas Baker', 50000),
(14, 32, 'Operations', 'Amelia Reed', 73000),
(15, 30, 'Engineering', 'Harper Foster', 56000),
(16, 25, 'Marketing', 'Ethan Hayes', 47000),
(17, 34, 'Finance', 'Charlotte Parker', 68000),
(18, 29, 'HR', 'James Brooks', 51000),
(19, 36, 'Operations', 'Mia Bennett', 76000),
(20, 23, 'Engineering', 'Alexander Diaz', 53000),
(21, 27, 'Marketing', 'Evelyn Morales', 49000),
(22, 31, 'Finance', 'Benjamin Ward', 65000),
(23, 28, 'HR', 'Luna Green', 52000),
(24, 35, 'Operations', 'Ella Adams', 77000),
(25, 26, 'Engineering', 'Henry Ramirez', 55000),
(26, 30, 'Marketing', 'Avery Hall', 48000),
(27, 33, 'Finance', 'William Hughes', 70000),
(28, 29, 'HR', 'Scarlett Cooper', 53000),
(29, 32, 'Operations', 'Zoey Sanders', 74000),
(30, 24, 'Engineering', 'Leo Long', 54000),
(31, 28, 'Marketing', 'Chloe Phillips', 50000),
(32, 34, 'Finance', 'Daniel Russell', 69000),
(33, 30, 'HR', 'Lillian Fisher', 52000),
(34, 36, 'Operations', 'Victoria Ortiz', 78000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
