import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        List<Order2> orders = new ArrayList<>();

        // Using default constructor
        Order2 order1 = new Order2();
        order1.id = 1;
        order1.customerName = "John Doe";
        order1.price = 250;
        order1.orderDate = new Date();
        order1.confirm = true;
        order1.items = new String[] { "Item1", "Item2" };
        order1.buyer = new Person("John", "Jane");

        // Using constructor with customerName and price
        Order2 order2 = new Order2("Alice", 450);
        order2.orderDate = new Date();
        order2.buyer = new Person("Henry", "Hoang");

        // Using constructor with customerName, price, and orderDate
        Order2 order3 = new Order2("Bob", 120, new Date());
        order3.buyer = new Person("Henry", "Hoang");

        // Using full constructor
        String[] items = { "Laptop", "Mouse", "Keyboard" };
        Person buyer = new Person("David", "Beckham");
        Order2 order4 = new Order2(4, "Charlie", 1000, new Date(), false, items, buyer);

        // Add all orders to the list
        orders.add(order1);
        orders.add(order2);
        orders.add(order3);
        orders.add(order4);

        // Print all orders
        for (Order2 order : orders) {
            System.out.println(order);
        }
    }
}
