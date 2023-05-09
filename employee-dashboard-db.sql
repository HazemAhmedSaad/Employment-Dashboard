-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2023 at 04:59 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee-dashboard-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `job_id` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `Description` varchar(10000) NOT NULL,
  `offer` int(11) NOT NULL,
  `max_candidate_number` int(11) NOT NULL,
  `actualCandidateNum` int(11) NOT NULL,
  `creation_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`job_id`, `position`, `Description`, `offer`, `max_candidate_number`, `actualCandidateNum`, `creation_date`) VALUES
(11, 'ceo', 'in this company all we care about is our customers and we want to make them happy and pleased with our products', 25000, 50, 0, '2023-04-24');

-- --------------------------------------------------------

--
-- Table structure for table `job_qualifications`
--

CREATE TABLE `job_qualifications` (
  `qualification_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_qualifications`
--

INSERT INTO `job_qualifications` (`qualification_id`, `job_id`) VALUES
(3, 11);

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

CREATE TABLE `qualification` (
  `qualification_id` int(11) NOT NULL,
  `qualification` varchar(20) NOT NULL,
  `qualification_desc` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`qualification_id`, `qualification`, `qualification_desc`) VALUES
(1, 'hi', 'sfsdfsdfxvdsgsafs'),
(2, 'node', 'skfjsnfeoifhafnv'),
(3, 'laravel', 'you have to have atleast 10 years of experience with this language');

-- --------------------------------------------------------

--
-- Table structure for table `request_job`
--

CREATE TABLE `request_job` (
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `response` enum('approved','declined','no response yet') NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_job`
--

INSERT INTO `request_job` (`user_id`, `job_id`, `response`, `date`) VALUES
(10, 11, 'declined', '2023-04-26');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_id` int(11) NOT NULL,
  `skill` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`skill_id`, `skill`) VALUES
(2, 'nodejs'),
(3, 'python'),
(4, 'laravel'),
(5, 'good speaker');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `phone` int(11) NOT NULL,
  `status` enum('active','in-active') NOT NULL,
  `type` enum('admin','applicant') NOT NULL,
  `image_url` text NOT NULL,
  `bio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `Email`, `password`, `phone`, `status`, `type`, `image_url`, `bio`) VALUES
(6, 'yhyatarek', '1home@gmail.com', '$2b$10$/.8ML8dLomsrE/EFNcBZuegRMqUeSSIJKQ1YFdDySaCraw.3.4voi', 498558, 'active', 'admin', '', 'hello to my account'),
(10, 'hamid', '12home@gmail.com', '$2b$10$8A17TJCIdIdwkCWDc5aMkuwAPs4axJbwWnD/tH8sztfhYETqQr7/.', 110121, 'active', 'applicant', '', '3rd-year Computer Science & Artificial Intelligence student having alot of interest about new technologies. \n I\'m a Google Certified Data Analyst who loves to Discover what the data storytelling and find the best solution . Right now , I\'m studying Machine learning on coursera ');

-- --------------------------------------------------------

--
-- Table structure for table `user_skills`
--

CREATE TABLE `user_skills` (
  `skill_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_skills`
--

INSERT INTO `user_skills` (`skill_id`, `user_id`) VALUES
(5, 10),
(4, 10),
(2, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `job_qualifications`
--
ALTER TABLE `job_qualifications`
  ADD KEY `job` (`job_id`),
  ADD KEY `qualification` (`qualification_id`);

--
-- Indexes for table `qualification`
--
ALTER TABLE `qualification`
  ADD PRIMARY KEY (`qualification_id`);

--
-- Indexes for table `request_job`
--
ALTER TABLE `request_job`
  ADD KEY `req` (`job_id`),
  ADD KEY `user` (`user_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD KEY `skill` (`skill_id`),
  ADD KEY `use` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `qualification`
--
ALTER TABLE `qualification`
  MODIFY `qualification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `job_qualifications`
--
ALTER TABLE `job_qualifications`
  ADD CONSTRAINT `job` FOREIGN KEY (`job_id`) REFERENCES `job` (`job_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qualification` FOREIGN KEY (`qualification_id`) REFERENCES `qualification` (`qualification_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `request_job`
--
ALTER TABLE `request_job`
  ADD CONSTRAINT `req` FOREIGN KEY (`job_id`) REFERENCES `job` (`job_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD CONSTRAINT `skill` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `use` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
