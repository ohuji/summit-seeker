-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: May 10, 2022 at 10:33 PM
-- Server version: 10.5.15-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `summitseeker`
--

-- --------------------------------------------------------

--
-- Table structure for table `Mountains`
--

CREATE TABLE `Mountains` (
  `ID` int(11) NOT NULL,
  `Name` varchar(40) DEFAULT NULL,
  `Difficulty` tinyint(1) DEFAULT NULL,
  `Height` int(11) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Mountains`
--

INSERT INTO `Mountains` (`ID`, `Name`, `Difficulty`, `Height`, `Location`) VALUES
(1, 'Mount Everest', 8, 8848, 'Himalayas'),
(2, 'K2', 10, 8611, 'Himalayas'),
(3, 'Mont Blanc', 5, 4808, 'Europe'),
(4, 'Eiger', 8, 3967, 'Europe'),
(5, 'Kilimanjaro', 1, 5895, 'Africa'),
(6, 'Mount Kenya', 3, 5199, 'Africa'),
(7, 'Peak Lenin', 5, 7134, 'Central Asia'),
(8, 'Mount Khuiten', 4, 4375, 'Central Asia'),
(9, 'Carstensz Pyramid', 6, 4884, 'Southeast Asia'),
(10, 'Mount Kosciuszko', 1, 2228, 'Australia'),
(11, 'Denali', 7, 6190, 'North America'),
(12, 'Aconcagua', 5, 6962, 'South America'),
(13, 'Mount Vinson', 3, 4897, 'South Pole'),
(14, 'Annapurna 1', 10, 8091, 'Himalayas');

-- --------------------------------------------------------

--
-- Table structure for table `Userposts`
--

CREATE TABLE `Userposts` (
  `ID` int(11) NOT NULL,
  `MountainID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `Title` varchar(50) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Equipment` text DEFAULT NULL,
  `Imagename` text DEFAULT NULL,
  `Postedtime` timestamp NOT NULL DEFAULT current_timestamp(),
  `Likes` int(11) DEFAULT 0,
  `Dislikes` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Userposts`
--

INSERT INTO `Userposts` (`ID`, `MountainID`, `UserID`, `Title`, `Description`, `Equipment`, `Imagename`, `Postedtime`, `Likes`, `Dislikes`) VALUES
(1, 1, 2, 'Journey to everest', 'Had fun eyahdiuchso csioncoiccpo eorvnioervnioernvionrvioerv ovronreionfoneiornoer voernrfioenfenrio rvoienrveirofnioerfnioerv oervoiernifionerionvioernfioenrv erveoirfnioernfioernioev ervnoerinfioernerioneionen', 'Ice pick, rope, food, water', 'trip1.jpg', '2022-05-05 19:38:03', 0, 0),
(2, 4, 6, 'Journey to K2', 'dbdgbbdbdbgdbbgdbdbgdg', 'Ice pick, food, water', 'trip2.jpg', '2022-05-05 19:38:03', 0, 0),
(3, 5, 9, 'Journey to Denali', 'kdsnoingiorgtionr ovntgdondt rtnoirgtoni', 'Rope, food, water', 'trip3.jpg', '2022-05-05 19:38:03', 0, 0),
(4, 6, 5, 'Journey to Mont Blanc', 'kosnvosnv sicd sjodv jsj csocd dss v jvk vd fvjd j vjk d dk jn', 'Just water', 'trip4.jpg', '2022-05-05 19:38:03', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `ID` int(11) NOT NULL,
  `Username` text CHARACTER SET utf8 NOT NULL,
  `Password` text CHARACTER SET utf8 NOT NULL,
  `About` text DEFAULT NULL,
  `Role` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`ID`, `Username`, `Password`, `About`, `Role`) VALUES
(1, 'Pekka', 'testi', 'iaofhahfaåhfafhahfaofhaf agaofg oagfao goag foagfaofgaofgafugagf ao oaugf oagfugfoa gaof goagfo gaf o.', 0),
(2, 'Pena123', 'test123', 'mwmdwådwoådm wmdw mdwodmwå mdåwomd owådåwdm åwmodwd åwmdw ådw.', 2),
(5, 'Pekka', '1214141411', NULL, 0),
(6, 'Pekka', '[object Promise]', NULL, 0),
(7, 'Pekka', '$2a$08$VoZMBKtcjzm9hryHAjhLXebb1uMBkBNyiMgxUWIL.dGDC1b7sKjxu', NULL, 0),
(8, 'Jorma123', '$2a$10$h47rm6ncGlo10ILFuxalUOPx8M5eh7dBcY3isnbZh40lENGX.Em6K', NULL, 0),
(9, 'Jdjwdwdw12', '$2a$10$oydgJL2Gu3l20FJfaE1ak.AGPttVHSwoXE.Um4THGonlxFE0TAUYa', NULL, 0),
(10, 'Jdjwdwdw1', '$2a$10$bfkoLmt/x0lXFJdk.FUo/OjmExjuyTXm7tZTbwqbveX40XXWbK0Si', NULL, 0),
(11, 'Testitesti12', '$2a$10$R0AQKyZyXXVyEGVGf3A/e.sZd06.JVMttj195wXb.HuzB/dDc553K', NULL, 0),
(12, 'Jorma123', '$2a$10$EJMuXuzkd6ZeHBtJAaUUpuGjurzzE0etWFoP4jfgqCYx3tw9OKJIC', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Mountains`
--
ALTER TABLE `Mountains`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Userposts`
--
ALTER TABLE `Userposts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MountainID` (`MountainID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Mountains`
--
ALTER TABLE `Mountains`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `Userposts`
--
ALTER TABLE `Userposts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Userposts`
--
ALTER TABLE `Userposts`
  ADD CONSTRAINT `Userposts_ibfk_1` FOREIGN KEY (`MountainID`) REFERENCES `Mountains` (`ID`),
  ADD CONSTRAINT `Userposts_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
