package library.controllers.Book;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.mongodb.util.JSONParseException;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@BasePathAwareController
public class BookController {
    @Autowired
    BookRepository repository;

    @PutMapping("/library/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") String id, @RequestBody Book bookEntity) {
        System.out.println("Update Book with ID = " + id + "...");

        Optional<Book> bookData = repository.findById(id);

        if (bookData.isPresent()) {
            Book book = bookData.get();
            book.setTitle(bookEntity.getTitle());
            book.setDescription(bookEntity.getDescription());
            book.setPublished(bookEntity.getPublished());
            book.setAuthors(bookEntity.getAuthors());
            return new ResponseEntity<>(repository.save(book), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/library/create")
    public ResponseEntity<Book> createBook(@RequestBody Book bookEntity) {
        System.out.println("Create New Book.");

        Book book = new Book(
            null,
            bookEntity.getTitle(),
            bookEntity.getAuthors(),
            bookEntity.getPublished(),
            bookEntity.getDescription()
        );
        return new ResponseEntity<>(repository.save(book), HttpStatus.OK);
    }

    @GetMapping("/library/search")
    public ResponseEntity<List<Book>> searchBook(@RequestParam("title") String title)
            throws JSONParseException, IOException {
        List<Book> books = repository.findBooksByTitleContains(title);
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
}
