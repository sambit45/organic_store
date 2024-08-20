//package com.organic_store_project.organic_store.products;
//
//import java.net.URI;
//import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.server.ResponseStatusException;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
////@RestController
//@CrossOrigin("http://localhost:3000")
//public class ProductsResource {
//	private ProductsService productsService;
//
//	public ProductsResource(ProductsService productsService) {
//		super();
//		this.productsService = productsService;
//	}
//	
//	@RequestMapping("/products")
//	public List<Products> retrieveAllProducts()
//	{
//		List<Products> products = productsService.retrieveAllProducts();
//		if(products==null)
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//		
//		return products; 
//	}
//	
//	@RequestMapping(value="/products",method=RequestMethod.POST)
//	public ResponseEntity<Object> addNewProduct(@RequestBody Products product){
//		String productId = productsService.addNewProduct(product);
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
//				.path("/{questionId}").buildAndExpand(productId).toUri();
//		return ResponseEntity.created(location).build();
//	}
//	
//	@RequestMapping(value="/products/{productId}",method=RequestMethod.DELETE)
//	public ResponseEntity<Object> deleteProductById(@PathVariable String productId)
//	{
//		productsService.deleteProductById(productId);
//		return ResponseEntity.ok("Resource with ID " + productId + " deleted successfully.");
//	}
//	
//	@RequestMapping(value="/products/{productId}",method=RequestMethod.PUT)
//	public ResponseEntity<Object> updateProductById(@PathVariable String productId,@RequestBody Products product)
//	{
//		productsService.updateProductById(productId,product);
//		return ResponseEntity.ok("Resource with ID " + productId + " has been updated successfully");
//	}
//}
