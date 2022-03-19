
CREATE DATABASE `app_peliculas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- app_peliculas.coment definition

CREATE TABLE `coment` (
  `id_coment` int NOT NULL AUTO_INCREMENT,
  `coment` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_coment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- app_peliculas.coment_movie definition

CREATE TABLE `coment_movie` (
  `id_coments` int DEFAULT NULL,
  `id_movie` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- app_peliculas.movies definition

CREATE TABLE `movies` (
  `id_movie` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `long_time` varchar(100) DEFAULT NULL,
  `url_youtube` varchar(100) DEFAULT NULL,
  `date_release` date DEFAULT NULL,
  `cover` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_movie`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- app_peliculas.score definition

CREATE TABLE `score` (
  `id_score` int NOT NULL AUTO_INCREMENT,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`id_score`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- app_peliculas.score_movie definition

CREATE TABLE `score_movie` (
  `id_score` int DEFAULT NULL,
  `id_movies` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;