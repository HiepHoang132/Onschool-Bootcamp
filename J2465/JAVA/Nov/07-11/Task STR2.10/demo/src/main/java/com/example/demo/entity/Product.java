package com.example.demo.entity;


import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "Input product code")
	@Size(min = 2, message = "Input product code at least 2 characters")
	@Column(name = "product_code", unique = true)
	private String productCode;

	@NotEmpty(message = "Input product name")
	@Column(name = "product_name")
	private String productName;

	@Column(name = "product_description")
	private String productDescripttion;

	@ManyToOne
	@JoinColumn(name = "product_line_id", nullable = false)
	@JsonIgnore
	private ProductLine productLine;

	@Transient
	private int idProductLine;

	public int getIdProductLine() {
		return getProductLine().getId();
	}

	public void setIdProductLine(int idProductLine) {
		this.idProductLine = idProductLine;
	}

	@NotEmpty(message = "Input product scale")
	@Column(name = "product_scale")
	private String productScale;

	@NotEmpty(message = "Input product vendor")
	@Column(name = "product_vendor")
	private String productVendor;

	@Min(message = "Input quantity in stock >= 0", value = 0)
	@Column(name = "quantity_in_stock")
	private int quantityInStock;

	@Min(message = "Input buy price >= 0", value = 0)
	@Column(name = "buy_price")
	private BigDecimal buyPrice;

	@OneToMany(mappedBy = "product")
	@JsonIgnore
	private List<OrderDetail> orderDetails;

	public Product() {
		productLine = new ProductLine();
	}

	public Product(int id, String productCode, String productName, String productDescripttion, String productScale,
			String productVendor, int quantityInStock, BigDecimal buyPrice, List<OrderDetail> orderDetails) {
		this.id = id;
		this.productCode = productCode;
		this.productName = productName;
		this.productDescripttion = productDescripttion;
		this.productScale = productScale;
		this.productVendor = productVendor;
		this.quantityInStock = quantityInStock;
		this.buyPrice = buyPrice;
		this.orderDetails = orderDetails;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescripttion() {
		return productDescripttion;
	}

	public void setProductDescripttion(String productDescripttion) {
		this.productDescripttion = productDescripttion;
	}

	public ProductLine getProductLine() {
		return productLine;
	}

	public void setProductLine(ProductLine productLine) {
		this.productLine = productLine;
	}

	public String getProductScale() {
		return productScale;
	}

	public void setProductScale(String productScale) {
		this.productScale = productScale;
	}

	public String getProductVendor() {
		return productVendor;
	}

	public void setProductVendor(String productVendor) {
		this.productVendor = productVendor;
	}

	public int getQuantityInStock() {
		return quantityInStock;
	}

	public void setQuantityInStock(int quantityInStock) {
		this.quantityInStock = quantityInStock;
	}

	public BigDecimal getBuyPrice() {
		return buyPrice;
	}

	public void setBuyPrice(BigDecimal buyPrice) {
		this.buyPrice = buyPrice;
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public Product withBuyPrice(BigDecimal newPrice){
		Product newProduct = new Product(this.id,this.productCode,this.productName,this.productDescripttion,
		this.productScale,this.productVendor,this.quantityInStock,newPrice,this.orderDetails);
		newProduct.setIdProductLine(this.idProductLine);
		newProduct.setProductLine(this.productLine);
		return newProduct;
	}
}
