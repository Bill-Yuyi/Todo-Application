package com.example.basic.auth;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	   @GetMapping(path ="/basicauth")
       public AuthenticationBean helloWorldBean() {
    	   return new AuthenticationBean("You are Authenticated");
       }

}
