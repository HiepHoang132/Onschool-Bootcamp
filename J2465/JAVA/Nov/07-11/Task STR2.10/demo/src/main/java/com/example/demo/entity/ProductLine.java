package com.example.demo.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "product_lines")
public class ProductLine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull(message = "Input product line")
	@Size(min = 2, message = "Input product line at least 2 characters")
	@Column(name = "product_line", unique = true)
	private String productLineName;

	@NotEmpty(message = "Input description")
	private String description;

	@OneToMany(mappedBy = "productLine")
	@JsonIgnore
	private List<Product> products;

	public ProductLine() {

	}

	public ProductLine(int id, String productLine, String description, List<Product> products) {
		this.id = id;
		this.productLineName = productLine;
		this.description = description;
		this.products = products;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductLineName() {
		return productLineName;
	}

	public void setProductLineName(String productLine) {
		this.productLineName = productLine;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

}
