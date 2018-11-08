package library.controllers.Book;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.Date;

public class Book {

	@Getter @Setter @Id private String id;
	@Getter @Setter private String title;
	@Getter @Setter private ArrayList<String> authors;
	@Getter private Date published;
	@Getter @Setter private String description;

	@JsonCreator
	public Book(
		@JsonProperty("id") String id,
		@JsonProperty("title") String title,
		@JsonProperty("authors") ArrayList<String> authors,
		@JsonProperty("published") Date published,
		@JsonProperty("description") String description
	) {
		this.id = id;
		this.title = title;
		this.authors = authors;
		this.published = published;
		this.description = description;
	}

	public void setPublished(Date date) { this.published = date != null ? date : new Date(); }
}
