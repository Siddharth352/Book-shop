package com.RestAPI.demo.services;

import java.util.List;


import com.RestAPI.demo.entity.Book;

public interface BookService {

	
	public List<Book> getBooks();
	public Book getBookById(long bookId);
	public Boolean addBook(Book book);
	public Boolean deleteBookById(long Id);
	public Boolean UpdateBookDetails(Book book);
	
}
