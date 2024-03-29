package com.example.demo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    //{
      //  "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY1ODczNjc0MywiaWF0IjoxNjU4MTMxOTQzfQ.H1YpHk159PydRgANbpZM64ORP1pGi10OOR769PXdqfAZqB3DdbQYJh7KDxK9RGqdFzHR9bszika0dyKKFgfWpQ"
    //}


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

