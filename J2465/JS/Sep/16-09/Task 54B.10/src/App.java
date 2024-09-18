public class App {
    public static void main(String[] args) throws Exception {
        Author author1 = new Author("J.K. Rowling", "jk.rowling@example.com", 'f');
        Author author2 = new Author("George R.R. Martin", "george.martin@example.com", 'm');

        Book book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, 29.99, 100);
        Book book2 = new Book("A Game of Thrones", author2, 39.99, 50);

        System.out.println("Authors");
        System.out.println(author1);
        System.out.println(author2);

        System.out.println("\nBooks");
        System.out.println(book1);
        System.out.println(book2);
    }
}
