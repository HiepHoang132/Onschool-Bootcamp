public class App {
    public static void main(String[] args) throws Exception {
        Customer customer1 = new Customer(101, "Alice Johnson", 10);
        Customer customer2 = new Customer(102, "Bob Smith", 20);

        System.out.println("Customer 1: " + customer1);
        System.out.println("Customer 2: " + customer2);

        Invoice invoice1 = new Invoice(1001, customer1, 250.00);
        Invoice invoice2 = new Invoice(1002, customer2, 300.00);

        System.out.println();
        System.out.println("Invoice 1: " + invoice1);
        System.out.println("Amount after discount for Invoice 1: " + invoice1.getAmountAfterDiscount());

        System.out.println("Invoice 2: " + invoice2);
        System.out.println("Amount after discount for Invoice 2: " + invoice2.getAmountAfterDiscount());
    }
}
