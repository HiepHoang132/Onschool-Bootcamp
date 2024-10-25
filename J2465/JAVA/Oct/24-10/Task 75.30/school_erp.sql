SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for grades
-- ----------------------------
DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` int(10) NOT NULL,
  `subject_id` int(10) NOT NULL,
  `grade` float NOT NULL,
  `create_date` int(10) NOT NULL,
  `update_date` int(10) NOT NULL,
  `exam_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_student_id`(`student_id`) USING BTREE,
  INDEX `fk_subject_id`(`subject_id`) USING BTREE,
  CONSTRAINT `fk_student_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of grades
-- ----------------------------
INSERT INTO `grades` VALUES (1, 1, 1, 7.6, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (3, 2, 1, 7.6, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (4, 1, 2, 5, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (5, 1, 3, 8, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (6, 2, 10, 5.9, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (7, 1, 9, 4.5, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (8, 2, 7, 9, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (9, 3, 1, 6, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (10, 3, 2, 8, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (11, 3, 3, 10, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (12, 3, 4, 5, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (13, 3, 10, 6, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (14, 4, 6, 5.9, 1622468260, 1622468260, '2021-02-14 00:00:00');
INSERT INTO `grades` VALUES (15, 4, 7, 7, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (16, 5, 8, 5.5, 1622468260, 1622468260, '2021-05-10 00:00:00');
INSERT INTO `grades` VALUES (17, 5, 5, 9, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (18, 5, 1, 4, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (19, 5, 2, 6, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (20, 6, 10, 7.6, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (21, 6, 9, 4, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (22, 6, 8, 5, 1622468260, 1622468260, '2021-05-10 00:00:00');
INSERT INTO `grades` VALUES (23, 6, 4, 5.5, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (24, 6, 3, 4, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (25, 6, 1, 6, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (26, 7, 6, 5, 1622468260, 1622468260, '2021-02-14 00:00:00');
INSERT INTO `grades` VALUES (27, 7, 5, 10, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (28, 7, 9, 7, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (29, 7, 10, 7, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (30, 8, 4, 7.6, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (31, 8, 1, 5, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (32, 8, 1, 8, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (33, 8, 10, 10, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (34, 9, 2, 9, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (35, 9, 1, 8.8, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (36, 9, 3, 7.6, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (37, 9, 7, 4, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (38, 10, 10, 10, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (39, 10, 9, 9, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (40, 10, 8, 8, 1622468260, 1622468260, '2021-05-10 00:00:00');
INSERT INTO `grades` VALUES (41, 10, 7, 7, 1622468260, 1622468260, '2021-03-14 00:00:00');
INSERT INTO `grades` VALUES (42, 10, 1, 4, 1622468260, 1622468260, '2021-04-23 00:00:00');
INSERT INTO `grades` VALUES (43, 10, 3, 3, 1622468260, 1622468260, '2021-04-14 00:00:00');
INSERT INTO `grades` VALUES (44, 1, 5, 6, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (45, 10, 5, 5, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (46, 3, 5, 4, 1622468260, 1622468260, '2021-05-04 00:00:00');
INSERT INTO `grades` VALUES (47, 9, 5, 10, 1622468260, 1622468260, '2021-05-04 00:00:00');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `create_date` int(10) NOT NULL,
  `update_date` int(10) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_student_code`(`student_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (1, '20071750', 'linhdh', 'Linh', 'Dinh', 1622468260, 1622468260);
INSERT INTO `students` VALUES (2, '20102345', 'namdh', 'Do', 'Nam', 1622468260, 1622468260);
INSERT INTO `students` VALUES (3, '20071850', 'longtt', 'Tran', 'Long', 1622468260, 1622468260);
INSERT INTO `students` VALUES (4, '20101234', 'dungnp', 'Ngo', 'Phuong Dung', 1622468260, 1622468260);
INSERT INTO `students` VALUES (5, '20082850', 'minhvd', 'Vu', 'Minh', 1622468260, 1622468260);
INSERT INTO `students` VALUES (6, '20091234', 'trungtt', 'Tran', 'Trung', 1622468260, 1622468260);
INSERT INTO `students` VALUES (7, '20077001', 'nganp', 'Ngo Phuong', 'Nga', 1622468260, 1622468260);
INSERT INTO `students` VALUES (8, '20077002', 'kienpc', 'Pham', 'Kien', 1622468260, 1622468260);
INSERT INTO `students` VALUES (9, '20077003', 'longnp', 'Ngo', 'Long', 1622468260, 1622468260);
INSERT INTO `students` VALUES (10, '20078750', 'minhnt', 'Nguyen', 'Minh', 1622468260, 1622468260);

-- ----------------------------
-- Table structure for subjects
-- ----------------------------
DROP TABLE IF EXISTS `subjects`;
CREATE TABLE `subjects`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `subject_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `subject_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `credit` int(10) NOT NULL,
  `create_date` int(10) NOT NULL,
  `update_date` int(10) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_subject_code`(`subject_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'bang chua danh muc mon hoc' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subjects
-- ----------------------------
INSERT INTO `subjects` VALUES (1, 'MAT101', 'Toán cao cấp', 4, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (2, 'PHY101', 'Vật lý đại cương', 3, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (3, 'MAT102', 'Giải tích 1', 4, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (4, 'MAT103', 'Toán rời rạc', 4, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (5, 'PHY103', 'Vật lý nguyên tử', 5, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (6, 'PHY401', 'Vật lý chuyên đề 1', 2, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (7, 'CHEM301', 'Hóa học hữu cơ', 3, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (8, 'ENG403', 'Tiếng Anh chuyên ngành', 3, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (9, 'ENG101', 'Tiếng Anh đại cương', 3, 1622468260, 1622468260);
INSERT INTO `subjects` VALUES (10, 'ECO101', 'Kinh tế học đại cương', 3, 1622468260, 1622468260);

SET FOREIGN_KEY_CHECKS = 1;

-- Hiển thị toàn bộ thông tin của tất cả môn học
SELECT * FROM subjects;

-- Hiển thị mã môn, tên môn, và số tín chỉ của 3 môn học
SELECT subject_code, subject_name, credit 
FROM subjects
LIMIT 3;

-- Hiển thị toàn bộ thông tin 4 môn có số tín chỉ thấp nhất
SELECT *
FROM subjects
ORDER BY credit ASC
LIMIT 4;

-- Hiển thị thông tin của sinh viên có mã sinh viên là: 20101234
SELECT * FROM students
HAVING student_code LIKE '20101234';

SELECT * FROM students
HAVING student_code = '20101234';

-- Hiển thị toàn bộ danh sách điểm của môn MAT101
-- Các cột: Mã môn, tên môn, tên sinh viên, điểm thi, ngày thi
SELECT 
	subject_code AS "Mã môn", 
  subject_name AS "Tên môn", 
  CONCAT(first_name, " ", last_name) AS "Tên sinh viên", 
  grade AS "Điểm thi",
  exam_date AS "Ngày thi"
FROM grades g
JOIN students stu
	ON stu.id = g.student_id
JOIN subjects sub
	ON sub.id = g.subject_id
WHERE subject_code = 'MAT101';

-- Lấy ra danh sách các môn có ngày thi là ngày 2021-05-04
SELECT DISTINCT subject_code, subject_name, exam_date
FROM subjects s
INNER JOIN grades g 
	ON s.id = g.subject_id
WHERE exam_date = '2021-05-04'

-- Lấy ra thông tin 3 điểm thi thấp nhất: môn học, tên sinh viên, điểm thi, ngày thi
SELECT 
	subject_name AS "Môn học",
    CONCAT(first_name, " ", last_name) AS "Tên sinh viên",
	grade AS " Điểm thi",
	exam_date AS "Ngày thi"
FROM grades g
JOIN students stu
	ON stu.id = g.student_id
JOIN subjects sub
	ON sub.id = g.subject_id
ORDER BY grade ASC
LIMIT 3

-- Lấy ra thông tin 1 sinh viên có điểm cao nhất của môn ECO101
-- Nếu có nhiều sinh viên có điểm bằng nhau thì vẫn lấy 1 sinh viên
SELECT student_code, user_name, CONCAT(first_name, " ", last_name) AS "fullname", grade
FROM grades g
JOIN students stu
	ON stu.id = g.student_id
JOIN subjects sub
	ON sub.id = g.subject_id
WHERE subject_code = "ECO101"
ORDER BY grade DESC
LIMIT 1
