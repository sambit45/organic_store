package com.organic_store_project.organic_store.products;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String imgURL;
	private String category;
	private String name;
	private String description;
	private int price;
	public Products() {
		
	}
	public Products(Long i, String imgURL, String category, String name,String description, int price) {
		super();
		this.id = i;
		this.imgURL = imgURL;
		this.category = category;
		this.name = name;
		this.description=description;
		this.price = price;
	}
	public Long getId() {
		return id;
	}
	public String getImgURL() {	
		return imgURL;
	}
	public String getCategory() {
		return category;
	}
	public String getName() {
		return name;
	}
	public int getPrice() {
		return price;
	}
	
	public void setId(Long string) {
		this.id = string;
	}
	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Products [id=" + id + ", imgURL=" + imgURL + ", category=" + category + ", name=" + name
				+ ", description=" + description + ", price=" + price + "]";
	}
	
	
	
	
	
}
