-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2021 at 05:56 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cks`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactdetails`
--

CREATE TABLE `contactdetails` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Subject` varchar(300) NOT NULL,
  `YourMessage` varchar(2000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jobdetails`
--

CREATE TABLE `jobdetails` (
  `Job_Id` int(11) NOT NULL,
  `Job_Title` varchar(1000) NOT NULL,
  `Job_Description` longtext NOT NULL,
  `Job_Prefered_Skill` longtext,
  `Job_IsActive` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobdetails`
--

INSERT INTO `jobdetails` (`Job_Id`, `Job_Title`, `Job_Description`, `Job_Prefered_Skill`, `Job_IsActive`, `createdAt`, `updatedAt`) VALUES
(1, 'angular', 'cxzczxc', 'zxczxczxc', 0, '2021-11-10 00:00:00', '2021-11-10 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `jobposts`
--

CREATE TABLE `jobposts` (
  `Id` int(11) NOT NULL,
  `Job_Id` int(11) NOT NULL,
  `Job_StartDate` datetime NOT NULL,
  `Job_EndDate` datetime NOT NULL,
  `Job_Location` varchar(100) NOT NULL,
  `Job_Type` varchar(100) NOT NULL,
  `Job_Experience` int(11) NOT NULL,
  `Job_Salary` int(11) NOT NULL,
  `Job_IsActive` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobposts`
--

INSERT INTO `jobposts` (`Id`, `Job_Id`, `Job_StartDate`, `Job_EndDate`, `Job_Location`, `Job_Type`, `Job_Experience`, `Job_Salary`, `Job_IsActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-11-16 00:00:00', '2021-11-15 00:00:00', 'xxxx', 'yyy', 2, 30000, 0, '2021-11-10 00:00:00', '2021-11-10 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactdetails`
--
ALTER TABLE `contactdetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `jobdetails`
--
ALTER TABLE `jobdetails`
  ADD PRIMARY KEY (`Job_Id`);

--
-- Indexes for table `jobposts`
--
ALTER TABLE `jobposts`
  ADD PRIMARY KEY (`Id`,`Job_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactdetails`
--
ALTER TABLE `contactdetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jobdetails`
--
ALTER TABLE `jobdetails`
  MODIFY `Job_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `jobposts`
--
ALTER TABLE `jobposts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
