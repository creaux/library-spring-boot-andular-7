
package library.controllers.Book;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "library", path = "library")
public interface BookRepository extends MongoRepository<Book, String> {
	List<Book> findBooksByTitleContains(@Param("title") String title);
	List<Book> findBookByDescriptionContains(@Param("Description") String description);
}
