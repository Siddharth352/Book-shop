package com.RestAPI.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RestAPI.demo.DaoLayer.BookDao;
import com.RestAPI.demo.entity.Book;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	BookDao bookdao;

//	List<Book> list = new ArrayList<>();
	
//	public BookServiceImpl() {
//		list.add(new Book(123,"Gril in room no 305", "Chetan bhagat", 430, "Murder of a girl"));
//		list.add(new Book(245,"An arranged Murder", "Chetan bhagat", 390, "Suspense thriller"));
//	}
	@Override
	public List<Book> getBooks() {
		return bookdao.findAll();
	}
	@Override
	public Book getBookById(long bookId) {
		    return bookdao.getById(bookId);
	}
	@Override
	public Boolean addBook(Book book) {
		try {
		bookdao.save(book);
		return true;
		}
		catch(Exception e) {
			System.out.println("ERROR"+e);
			return false;
		}
		
	}
	@Override
	public Boolean deleteBookById(long Id) {
		try {
		
		bookdao.deleteById(Id);
		return true;
		}
		catch(Exception e) {
			return false;
		}
	}
	@Override
	public Boolean UpdateBookDetails(Book book) {
		
		try {
			bookdao.save(book);
		}
		catch(Exception e) {
			return false;
		}
		return true;
	}
	

	
	
}
