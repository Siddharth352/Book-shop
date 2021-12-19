package com.RestAPI.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Book {
	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long Id;
	private String name;
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String author;
	private int cost;
	private String download_link;
	public String getdownload_link() {
		return download_link;
	}
	public void setDownloadLink(String downloadLink) {
		download_link = downloadLink;
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	private String Description;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public Book(long id, String name, String author, int cost, String downloadLink, String description) {
		super();
		Id = id;
		this.name = name;
		this.author = author;
		this.cost = cost;
		download_link = downloadLink;
		Description = description;
	}
	@Override
	public String toString() {
		return "Book [Id=" + Id + ", name=" + name + ", author=" + author + ", cost=" + cost + ", DownloadLink="
				+ download_link + ", Description=" + Description + "]";
	}
	
	
	
	
	
	
	
}
