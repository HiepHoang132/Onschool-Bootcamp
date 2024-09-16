public class App {
    public static void main(String[] args) throws Exception {
        InvoiceItem item1 = new InvoiceItem("001", "Laptop", 2, 1200.50);
        InvoiceItem item2 = new InvoiceItem("002", "Monitor", 3, 250.75);

        System.out.println(item1);
        System.out.println(item2);

        System.out.println();
        System.out.printf("Total: $%.2f\n", item1.getTotal());
        System.out.printf("Total: $%.2f\n", item2.getTotal());
    }
}
