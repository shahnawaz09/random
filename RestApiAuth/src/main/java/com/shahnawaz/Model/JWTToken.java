package com.shahnawaz.Model;

public class JWTToken {
	
	private String token;

	public JWTToken() {
		super();
		
	}
	public JWTToken(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
