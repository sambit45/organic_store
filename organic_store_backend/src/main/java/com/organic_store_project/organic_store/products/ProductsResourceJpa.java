package com.organic_store_project.organic_store.products;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.organic_store_project.organic_store.cart.CartItem;
import com.organic_store_project.organic_store.cart.CartItemRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductsResourceJpa {
//	private ProductsService productsService;

	public ProductsResourceJpa(ProductsService productsService,ProductRepository productRepository) {
		super();
//		this.productsService = productsService;
		this.productRepository=productRepository;
	}
	
	private  ProductRepository productRepository;
	
	@RequestMapping("/products/{productId}")
	public ResponseEntity<Products> retrieveProductById(@PathVariable Long productId) {
	    Optional<Products> productsOptional = productRepository.findById(productId);

	    return productsOptional
	            .map(products -> new ResponseEntity<>(products, HttpStatus.OK))
	            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@RequestMapping("/products")
	public ResponseEntity<List<Products>> retrieveAllProducts() {
        List<Products> products = productRepository.findAll();

        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(products, HttpStatus.OK);
    }
	
	@RequestMapping(value="/products/product",method=RequestMethod.POST)
	public ResponseEntity<Object> addNewProduct(@RequestBody Products product){
		productRepository.save(product);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/products").buildAndExpand(product.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@RequestMapping(value="/products",method=RequestMethod.POST)
	public ResponseEntity<Object> addNewProduct(@RequestBody List<Products> Products){
		productRepository.saveAll(Products);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/products").buildAndExpand().toUri();
		return ResponseEntity.created(location).build();
	}
	
	@RequestMapping(value="/products/{productId}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteProductById(@PathVariable Long productId)
	{
		productRepository.deleteById(productId);
		return ResponseEntity.ok("Resource with ID " + productId + " deleted successfully.");
	}
	
	@RequestMapping(value="/products",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteAllProducts()
	{
		productRepository.deleteAll();
		return ResponseEntity.ok("Resource deleted successfully.");
	}
	
	@RequestMapping(value="/products/{productId}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateProductById(@PathVariable Long productId,@RequestBody Products product)
	{
		Optional<Products> existingProductOptional = productRepository.findById(productId);

        if (existingProductOptional.isPresent()) {
            
            Products existingProduct = existingProductOptional.get();

            existingProduct.setImgURL(product.getImgURL());
            existingProduct.setCategory(product.getCategory());
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setPrice(product.getPrice());

            productRepository.save(existingProduct);

            return ResponseEntity.ok("Resource with ID " + productId + " has been updated successfully");
        } 
        else {
            return ResponseEntity.notFound().build();
        }
	}
}
