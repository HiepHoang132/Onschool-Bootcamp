public class AppV4 {
    public static void main(String[] args) {
        User user1 = new User();
        User user2 = new User("username", "password");
        System.out.println(user1.toString());
        System.out.println(user2.toString());
    }
}
