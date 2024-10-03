-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2024 at 06:14 AM
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
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) NOT NULL,
  `dia_chi` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ho_ten` varchar(255) DEFAULT NULL,
  `ngay_cap_nhat` bigint(20) DEFAULT NULL,
  `ngay_tao` bigint(20) DEFAULT NULL,
  `so_dien_thoai` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `dia_chi`, `email`, `ho_ten`, `ngay_cap_nhat`, `ngay_tao`, `so_dien_thoai`) VALUES
(1, '123 Đường Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội', 'nguyenvannam@gmail.com', 'Nguyễn Văn Nam', 1696265600, 1696265600, '0905123456'),
(2, '45 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh', 'tranthihhoa@yahoo.com', 'Trần Thị Hoa ', 1696265600, 1696265600, '0987654321'),
(3, '67 Trần Phú, Phường Hải Châu 1, Quận Hải Châu, Đà Nẵng', 'leminhquan@outlook.com', 'Lê Minh Quân', 1696265600, 1696265600, '0912345678'),
(4, '12 Lê Lợi, Phường Vĩnh Ninh, Thành phố Huế', 'phamthuydung@hotmail.com', 'Phạm Thuỳ Dung', 1696265600, 1696265600, '0965123456'),
(5, '89 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh', 'hoanganhtuan@zoho.com', 'Hoàng Anh Tuấn', 1696265600, 1696265600, '0938765432'),
(6, '456 Phan Đình Phùng, Phường Tân An, Thành phố Buôn Ma Thuột, Đắk Lắk', 'dothikimlien@icloud.com', 'Đỗ Thị Kim Liên', 1696265600, 1696265600, '0971234567');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
