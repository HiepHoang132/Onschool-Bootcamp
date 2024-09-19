public class App {
    public static void main(String[] args) throws Exception {
        Customer customer1 = new Customer(1, "Alice", 10);
        Customer customer2 = new Customer(2, "Bob", 15);

        System.out.println(customer1);
        System.out.println(customer2);
        System.out.println();

        Account account1 = new Account(101, customer1, 500.234);
        Account account2 = new Account(102, customer2, 300.538);

        System.out.println(account1);
        System.out.println(account2);
    }
}
