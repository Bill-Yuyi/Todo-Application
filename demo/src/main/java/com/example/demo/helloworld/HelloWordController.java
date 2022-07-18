package com.example.demo.helloworld;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWordController {
	
	   @GetMapping(path ="/hello-world")
       public String helloWorld() {
    	   return "hello world";
       }
	   
	   @GetMapping(path ="/hello-world-bean")
       public HelloWorldBean helloWorldBean() {
    	   return new HelloWorldBean("hello world bean");
       }
	   
	   @GetMapping(path ="/hello-world-bean/path-variable/{name}")
	   public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		    //throw new RuntimeException("something went wrong");
		    return new HelloWorldBean(String.format("Hello, %s", name));
	   }
}
