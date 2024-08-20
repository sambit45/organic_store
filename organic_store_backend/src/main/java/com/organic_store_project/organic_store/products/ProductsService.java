package com.organic_store_project.organic_store.products;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class ProductsService {
	
	private static String[] names = {
		    "Assorted Coffee",
		    "Farm Fresh Eggs",
		    "Diabetic Cookies",
		    "Cashew Butter",
		    "Fresh Orange Juice",
		    "Fresh Organic Honey",
		    "Natural Extracted Edible Oil",
		    "Pulses From Organic Farm",
		    "Wheat From Organic Farms"
		};
	private static String[] imageUrls = {
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-300x300.jpg",
            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat-300x300.jpg"
    };
	private static String[] descriptions = {
		    "Delicious coffee",
		    "Creamy cashew butter",
		    "Healthy diabetic cookies",
		    "Fresh eggs",
		    "Refreshing orange juice",
		    "Pure organic honey",
		    "Nutritious edible oil",
		    "Wholesome pulses",
		    "Quality wheat"
		};
	private static int[] prices = {
		    35, // Assorted Coffee
		    34, // Farm Fresh Eggs
		    25, // Diabetic Cookies
		    25, // Cashew Butter
		    18, // Fresh Orange Juice
		    34, // Fresh Organic Honey
		    25, // Natural Extracted Edible Oil
		    15, // Pulses From Organic Farm
		    34  // Wheat From Organic Farms
		};

    private static List<Products> products = new ArrayList<>();
    static {
    	for (int i = 0; i < imageUrls.length; i++) {
            products.add(new Products((long) (i + 1), imageUrls[i], "Groceries", names[i], descriptions[i], prices[i]));
        }
    }
    public List<Products> retrieveAllProducts() {
        return products;
    }

    public List<Products> retrieveSurveyByCategory(String category) {
    	Predicate<Products> categoryFilter = product ->
        product.getCategory().equalsIgnoreCase(category);

		return products.stream()
		        .filter(categoryFilter)
		        .collect(Collectors.toList());
    }

	public Long addNewProduct(Products product) {
	    product.setId(Long.parseLong(createRandomId()));
	    products.add(product); // Update the reference to the modifiable list
	    return product.getId();
	}
	
	private String createRandomId() {
		SecureRandom secureRandom = new SecureRandom();
		String randomId = new BigInteger(32,secureRandom).toString();
		return randomId;
	}

	public Long deleteProductById(Long productId) {
		List<Products> products = retrieveAllProducts();
		if(products==null)	return null;
		Predicate<? super Products> predicate= product -> product.getId()==productId;
		boolean removed = products.removeIf(predicate);
		if(!removed)
			return null;
		return productId;
	}

	public void updateProductById(Long productId,Products product) {
		List<Products> products = retrieveAllProducts();
		products.removeIf(p -> p.getId()==productId);
		product.setId(productId);
		products.add(product);
	}
}
