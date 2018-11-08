package library.models;

import org.springframework.data.annotation.Id;

public class User {

    @Id private String id;

    private String forename;
    private String surname;
    private String username;
    private String password;
    private String email;

    public User(String forename, String surname, String username, String password, String email) {
        this.forename = forename;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getForname() {
        return this.forename;
    }

    public void setForename(String forename) {
        this.forename = forename;
    }

    public String getSurname() {
        return this.surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
