package com.example.demo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i = 0;i < 11; i++) {
			String encoded = encoder.encode("dum");
			System.out.println(encoded);
		}
	}

}
