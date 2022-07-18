package com.example.basic.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration

public class SpringSecurityConfigurationBasicAuth{
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		
		http
		.csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		 .anyRequest().authenticated()
		 .and()
		 .httpBasic();
	
	return http.getOrBuild();
	}
}
