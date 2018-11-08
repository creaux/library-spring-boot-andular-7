package library.controllers.User;

import library.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends MongoRepository<User, String> {/*
    Block some methods like findAll etc.
    https://stackoverflow.com/questions/29169717/how-to-prevent-some-http-methods-from-being-exported-from-my-mongorepository
*/}
