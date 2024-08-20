package com.organic_store_project.organic_store.security;

import java.util.function.Function;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfiguration {
	
	@Bean
	public InMemoryUserDetailsManager createUserDetailsManager() {
		Function<String, String> passwordEncoder = 
					input -> passwordEncoder().encode(input);
		String username = "Sambit";
		String password = "Sambit@1234";
		UserDetails userDetails = createNewUser(passwordEncoder, username, password);
		return new InMemoryUserDetailsManager(userDetails);
	}
	private UserDetails createNewUser(Function<String, String> passwordEncoder, String username, String password) {
		UserDetails userDetails = User.builder()
									  .passwordEncoder(passwordEncoder)
									  .username(username)
									  .password(password)
									  .roles("USER","ADMIN")
									  .build();
		return userDetails;
	}
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
	@SuppressWarnings("removal")
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and() // Enable CORS and configure it
            .authorizeHttpRequests()
                .requestMatchers("/**").permitAll() // Allow access to all endpoints
                .anyRequest().authenticated()
                .and()
            .csrf().disable(); // Disable CSRF protection for simplicity

        return http.build();
    }
}
