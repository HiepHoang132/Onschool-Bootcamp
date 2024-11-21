-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 21, 2024 at 04:47 AM
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
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` bigint(20) NOT NULL,
  `diem` bigint(20) DEFAULT NULL,
  `gioi_tinh` varchar(10) NOT NULL,
  `ho_va_ten` varchar(100) NOT NULL,
  `ma_sinh_vien` varchar(100) NOT NULL,
  `ngay_sinh` date DEFAULT NULL,
  `noi_sinh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `diem`, `gioi_tinh`, `ho_va_ten`, `ma_sinh_vien`, `ngay_sinh`, `noi_sinh`) VALUES
(21, 8, 'Nam', 'Nguyen Minh Tu', 'SV001', '2001-05-21', 'Hanoi'),
(22, 7, 'Nu', 'Le Thi Lan', 'SV002', '2002-07-11', 'HCM'),
(23, 6, 'Nam', 'Tran Minh Duc', 'SV003', '2001-12-10', 'Danang'),
(24, 9, 'Nu', 'Pham Thi Mai', 'SV004', '2000-03-15', 'Hue'),
(25, 8, 'Nam', 'Nguyen Minh Hoang', 'SV005', '1999-09-01', 'Hai Phong'),
(26, 7, 'Nu', 'Ngo Thi Lan', 'SV006', '2003-01-20', 'Nha Trang'),
(27, 6, 'Nam', 'Vu Minh Quan', 'SV007', '2000-06-18', 'Can Tho'),
(28, 7, 'Nu', 'Nguyen Thi Thu', 'SV008', '1998-11-07', 'Vinh'),
(29, 8, 'Nu', 'Tran Thi Thanh', 'SV009', '2002-02-28', 'Quang Ngai'),
(30, 7, 'Nam', 'Pham Minh Khoi', 'SV010', '2001-10-10', 'Bac Giang'),
(31, 6, 'Nu', 'Le Thi Lan Anh', 'SV011', '2003-04-12', 'Long An'),
(32, 9, 'Nu', 'Nguyen Thi Lan', 'SV012', '2002-08-19', 'Binh Duong'),
(33, 7, 'Nam', 'Tran Minh Kien', 'SV013', '1999-05-22', 'Quang Ninh'),
(34, 6, 'Nu', 'Pham Thi Huong', 'SV014', '2000-03-10', 'Dak Lak'),
(35, 8, 'Nam', 'Nguyen Minh Bao', 'SV015', '2003-07-17', 'Phu Tho'),
(36, 8, 'Nu', 'Vu Thi Mai', 'SV016', '2001-09-30', 'Nghe An'),
(37, 7, 'Nu', 'Tran Thi Hien', 'SV017', '2001-01-02', 'Nam Dinh'),
(38, 6, 'Nam', 'Le Minh Hung', 'SV018', '2000-12-23', 'Tuyen Quang'),
(39, 8, 'Nu', 'Nguyen Thi Lan Anh', 'SV019', '1998-10-14', 'An Giang'),
(40, 9, 'Nam', 'Pham Minh Duy', 'SV020', '2002-04-25', 'Binh Phuoc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
