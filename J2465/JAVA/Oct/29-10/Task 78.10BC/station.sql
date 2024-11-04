CREATE TABLE station (
    Id INT PRIMARY KEY, 
    City VARCHAR(21) NOT NULL,
    State VARCHAR(2) NOT NULL,
    Lat_N DECIMAL(13,10) NOT NULL,
    Long_W DECIMAL(13,10) NOT NULL
);

INSERT INTO station (Id, City, State, Lat_N, Long_W) VALUES
    (1, 'Pfeifer', 'KS', 37.4447804700, 65.6849125200),
    (3, 'Hesperia', 'CA', 106.0569286000, 71.1187671100),
    (4, 'South Britain', 'CT', 65.5842193100, 33.6050437900),
    (6, 'South Britain', 'CT', 65.5842193100, 33.6050437900),
    (11, 'Crescent City', 'FL', 58.0396424800, 117.9040740000),
    (14, 'Forest', 'MS', 120.2830760000, 50.2288335600),
    (15, 'Ducor', 'CA', 140.8633607000, 102.0393390000),
    (16, 'Beaufort', 'MO', 71.7741806400, 85.6574183800),
    (17, 'Fredericktown', 'MO', 105.5334784000, 112.6890911000),
    (23, 'Honolulu', 'HI', 110.1019550000, 139.7437776000),
    (25, 'New Century', 'KS', 135.0165273000, 79.2737078000);

/*
Truy vấn danh sách tên CITY từ STATION cho các thành phố có số ID chẵn
In kết quả theo bất kỳ thứ tự nào, 
nhưng loại trừ các kết quả trùng lặp khỏi câu trả lời.
*/
SELECT DISTINCT City
FROM station
WHERE MOD(Id, 2) = 0;

SELECT DISTINCT City
FROM station
WHERE Id % 2 = 0

/*
Tìm sự khác biệt giữa tổng số mục nhập CITY trong bảng 
và số mục nhập CITY riêng biệt trong bảng.
*/
SELECT 
	COUNT(Id) - COUNT(DISTINCT(City)) AS 'Difference'
FROM station