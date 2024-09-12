public class User {
    String username;
    String password;
    Boolean enabled;

    public User() {
        this.username = "Default";
        this.password = "Default";
        this.enabled = false;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.enabled = false;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
            return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "User [username=" + username + ", password=" + password + ", enabled=" + enabled + "]";
    }

}