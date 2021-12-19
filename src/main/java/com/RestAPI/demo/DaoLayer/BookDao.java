package com.RestAPI.demo.DaoLayer;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestAPI.demo.entity.Book;

public interface BookDao extends JpaRepository<Book, Long>{
	
}
