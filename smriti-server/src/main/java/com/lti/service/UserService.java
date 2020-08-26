package com.lti.service;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;

import javax.xml.bind.DatatypeConverter;

import com.lti.entity.Customer;
import com.lti.entity.User;

public interface UserService {

	void register(Customer customer);

	void register(User user);

	List<String> login(String email, String password);

	boolean isUserPresent(String email);
	
	public static String getHashedString(String text) {
		try {
			text = Base64.getEncoder().encodeToString(text.getBytes());

			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(text.getBytes());

			byte[] digest = md.digest();
			text = DatatypeConverter.printHexBinary(digest).toUpperCase();

			return text;

		} catch (Exception e) {
			return Base64.getEncoder().encodeToString(text.getBytes());
		}
	}

}