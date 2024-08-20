package com.organic_store_project.organic_store.cart;

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

@RestController
@CrossOrigin("http://localhost:3000")
public class CartProductsResourceJpa {
    
    private CartItemRepository cartItemRepository;

    public CartProductsResourceJpa(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @RequestMapping("/cartItems")
    public ResponseEntity<List<CartItem>> retrieveAllCartItems() {
        List<CartItem> items = cartItemRepository.findAll();

        if (items.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @RequestMapping(value = "/cart/add", method = RequestMethod.POST)
    public ResponseEntity<Object> addToCart(@RequestBody CartItem cartItem) {
        try {
            Optional<CartItem> existingCartItemOptional = cartItemRepository.findById(cartItem.getId());

            if (existingCartItemOptional.isPresent()) {
                CartItem existingCartItem = existingCartItemOptional.get();
                int newQuantity = existingCartItem.getQuantity() + cartItem.getQuantity();
                existingCartItem.setQuantity(newQuantity);
                cartItemRepository.save(existingCartItem);
            } else {
                cartItemRepository.save(cartItem);
            }
            return ResponseEntity.ok("Item added to cart successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add item to cart");
        }
    }

    @RequestMapping(value = "/cart/update", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateCartItemQuantity(@RequestBody CartItem cartItem) {
        Optional<CartItem> existingCartItemOptional = cartItemRepository.findById(cartItem.getId());

        if (existingCartItemOptional.isPresent()) {
            CartItem existingCartItem = existingCartItemOptional.get();
            existingCartItem.setQuantity(cartItem.getQuantity());
            cartItemRepository.save(existingCartItem);
            return ResponseEntity.ok("Item quantity updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found in cart");
        }
    }
    
    @RequestMapping(value="/cart/{id}",method=RequestMethod.DELETE)
    public ResponseEntity<Object> deleteCartById(@PathVariable Long id){
    	if (cartItemRepository.existsById(id)) {
            cartItemRepository.deleteById(id);
            return ResponseEntity.ok().build(); // Return 200 OK
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if item with given id is not found
        }
    }

    @RequestMapping(value = "/cart", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteAllCart() {
        cartItemRepository.deleteAll();
        return ResponseEntity.ok("All Items Deleted Successfully!");
    }
}
