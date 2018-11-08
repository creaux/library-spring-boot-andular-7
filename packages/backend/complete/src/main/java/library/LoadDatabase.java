package library;

import com.thedeanda.lorem.Lorem;
import com.thedeanda.lorem.LoremIpsum;
import library.controllers.Book.Book;
import library.controllers.Book.BookRepository;
import library.models.User;
import library.controllers.User.UserRepository;
import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Date;

@Configuration
@Slf4j
public class LoadDatabase {

    private Lorem lorem;

    public LoadDatabase() {
        this.lorem = LoremIpsum.getInstance();
    }

    private String generateString(int min, int max) {
        return lorem.getTitle(min, max);
    }
    private Date generateDate() {
        return new Date();
    }

    private Book generateBook(int index) {
        return new Book(
            Integer.toString(index),
            this.generateString(2, 5),
            this.generateAuthors(),
            this.generateDate(),
            this.generateString(12, 36)
        );
    }

    private ArrayList<String> generateAuthors() {
        ArrayList<String> authors = new ArrayList<>();
        authors.add(this.lorem.getTitle(2));
        return authors;
    }

    private User generateUser() {
        return new User(
            this.generateString(1, 1),
            this.generateString(1, 1),
            "admin",
            "password",
            "admin@admin.xxx"
        );
    }

    @Bean
    CommandLineRunner initDatabase(BookRepository bookRepository, UserRepository userRepository) {
        return args -> {
            for (int i = 0; i < 5; i++) {
                log.info("Creating Book: " + bookRepository.save(this.generateBook(i)));
            }
            log.info("Creating User: " + userRepository.save(this.generateUser()));
        };
    }
}
