-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-18 18:39:15
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(31, '高校', '火影忍者博人传鸣人死后，佐助女儿佐良娜将成为八代火影？', 'img/1set.jpg', '2017-03-11', 'baidu'),
(32, '精选', '外交部：中方对巴西部分肉类产品出现质量问题表示关切', 'img/1set.jpg', '2017-03-11', 'baidu'),
(33, '精选', '锤子删微博的背后，暴露出的到底是什么？', 'img/3.jpg', '2017-03-11', 'baidu'),
(34, '精选', '在农村自己建沼气池，2017年补助额度上限为5000万元', 'img/3.jpg', '2017-03-11', 'baidu'),
(35, '百家', '隐藏在地球内的另一个“古地球”，科学家发现之后疯了', 'img/5.jpg', '2017-03-11', 'baidu'),
(36, '百家', '百度人工智能首席科学家 吴恩达 宣布离职啊', 'img/3.jpg', '2017-03-11', 'baidu'),
(38, '百家', '房子那么多，为啥你却买不起？', 'img/1set.jpg', '2017-03-11', 'baidu'),
(40, '本地', '北京11家房地产中介被责令关停', 'img/1set.jpg', '2017-03-03', 'baidu'),
(41, '本地', '北京4月8号起将取消药品加成、挂号费和诊疗费', 'img/1set.jpg', '2017-03-03', 'baidu'),
(42, '娱乐', '地铁19号线4站开建：南起新宫站北至牡丹园 一期计划2020年底开通', 'img/3.jpg', '2017-03-03', 'baidu'),
(88, '精选', 'asf', 'asf', '2017-04-10', 'asfg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
