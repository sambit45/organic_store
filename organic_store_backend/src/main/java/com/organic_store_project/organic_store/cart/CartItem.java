package com.organic_store_project.organic_store.cart;

import com.organic_store_project.organic_store.products.Products;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CartItem {

	@Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;

    private int quantity;
    private String imgURL;
	private String category;
	private String name;
	private String description;
	private int price;
	public CartItem() {
		
	}
	public CartItem(Long id, Products products, int quantity, String imgURL, String category, String name,
			String description, int price) {
		super();
		this.id = id;
		this.products = products;
		this.quantity = quantity;
		this.imgURL = imgURL;
		this.category = category;
		this.name = name;
		this.description = description;
		this.price = price;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Products getProducts() {
		return products;
	}
	public void setProducts(Products products) {
		this.products = products;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getImgURL() {
		return imgURL;
	}
	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "CartItem [id=" + id + ", products=" + products + ", quantity=" + quantity + ", imgURL=" + imgURL
				+ ", category=" + category + ", name=" + name + ", description=" + description + ", price=" + price
				+ "]";
	}

    
}