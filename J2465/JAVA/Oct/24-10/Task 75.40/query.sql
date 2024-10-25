-- Hiển thị toàn bộ thông tin khách hàng (customers) có credit > 50000
SELECT * 
FROM customers
WHERE credit_limit > 50000;

-- Hiển thị toàn bộ thông tin danh sách sản phẩm, với tên của product_line tương ứng
-- (không hiển thị product_line_id mà hiển thị tên product line)
SELECT 
	p.id, product_code, 
    product_name, product_description,
	pl.product_line, product_scale, 
    product_vendor, quantity_in_stock, buy_price
FROM products p
JOIN product_lines pl
	ON pl.id = p.product_line_id;

-- Đếm xem ở từng nước, có bao nhiêu khách hàng? (hiển thị tên nước, số lượng khách hàng)
SELECT country, COUNT(id) AS "total_customers"
FROM customers
GROUP BY country;

-- Sắp xếp các sản phẩm theo giá mua tăng dần và lấy ra 10 sản phẩm đầu tiên
SELECT * 
FROM products
ORDER BY buy_price ASC
LIMIT 10;

-- Lấy ra danh sách các đơn hàng được đặt vào tháng 10/2003
SELECT *
FROM orders
WHERE order_date BETWEEN '2003-10-01' AND '2003-10-31';

-- Lấy ra danh sách các khách hàng có số lượng đơn hàng > 3
SELECT 
	o.customer_id,
	CONCAT(last_name, " ", first_name) AS "full_name", 
    phone_number, address, city, 
    state, postal_code, country, 
    COUNT(o.customer_id) AS "total_order"
FROM orders o
JOIN customers c
	ON c.id = o.customer_id
GROUP BY o.customer_id
HAVING total_order > 3  
ORDER BY `o`.`customer_id`;

-- Tính toán xem, mỗi đơn hàng có bao nhiêu sản phẩm được đặt và tổng tiền từng đơn hàng là bao nhiêu
-- Hiển thị: order_id, tổng số lượng và tổng tiền
SELECT 
	order_id, 
    SUM(quantity_order) AS "total_amount", 
    SUM(quantity_order * price_each) AS "total_money"
FROM orders o
JOIN order_details od
	ON o.id = od.order_id
GROUP BY order_id;

-- Tính toán xem, mỗi đơn hàng có bao nhiêu sản phẩm được đặt và tổng tiền từng đơn hàng là bao nhiêu. 
-- Và lấy ra danh sách các đơn có tổng tiền > 10000
-- Hiển thị: order_id, tổng số lượng và tổng tiền
SELECT 
	order_id, 
    SUM(quantity_order) AS "total_amount", 
    SUM(quantity_order * price_each) AS "total_money"
FROM orders o
JOIN order_details od
	ON o.id = od.order_id
GROUP BY order_id
HAVING total_money > 10000;

-- Tìm và hiển thị toàn bộ thông tin sản phẩm được đặt nhiều nhất (theo quantity_order) trong năm 2004
SELECT 
    order_date, 
    order_id, 
    product_code, 
    product_name, 
    product_description,
    SUM(quantity_order) AS "total_quantity"
FROM orders o
JOIN order_details od
    ON o.id = od.order_id
JOIN products p
	ON p.id = od.product_id
WHERE order_date BETWEEN '2004-01-01' AND '2004-12-31'
GROUP BY product_id  
ORDER BY `total_quantity` DESC
LIMIT 1