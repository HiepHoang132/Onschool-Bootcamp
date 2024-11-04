CREATE TABLE city (
	Id INT, 
    Name VARCHAR(17) NOT NULL,
    CountryCode VARCHAR(3) NOT NULL,
    District VARCHAR(20) NOT NULL,
    Population INT NOT NULL,
    PRIMARY KEY (Id)
)

INSERT INTO city (Id, Name, CountryCode, District, Population) VALUES
    (1520, 'Cesena', 'ITA', 'Emilia-Romagna', 89852),
    (1613, 'Neyagawa', 'JPN', 'Osaka', 257315),
    (1630, 'Ageo', 'JPN', 'Saitama', 209442),
    (1661, 'Sayama', 'JPN', 'Saitama', 162472),
    (1681, 'Omuta', 'JPN', 'Fukuoka', 142889),
    (1739, 'Tokuyama', 'JPN', 'Yamaguchi', 107078),
    (1793, 'Novi Sad', 'YUG', 'Vojvodina', 179626),
    (1857, 'Kelowna', 'CAN', 'British Colombia', 89442),
    (1895, 'Harbin', 'CHN', 'Heilongjiang', 4289800),
    (1900, 'Changchun', 'CHN', 'Jilin', 2812000);

/*
Truy vấn tất cả các thuộc tính của mọi thành phố Nhật Bản trong bảng CITY
COUNTRYCODE của Nhật Bản là JPN.
*/
SELECT * 
FROM city 
WHERE CountryCode = 'JPN'


