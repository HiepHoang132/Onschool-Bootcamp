import java.util.ArrayList;
import java.util.Date;

public class AppV3 {
    public static void main(String[] args) {
        
        ArrayList<Order> orders = new ArrayList<>();
        Order o1 = new Order();
        String[] items = { "Coffee", "Kombucha" };
        o1.setId(1);
        o1.setCustomerName("Hiep");
        o1.setPrice(2000);
        o1.setOrderDate(new Date());
        o1.setConfirm(false);
        o1.setItems(items);
        Order o2 = new Order("Mai", 1000);
        o2.setOrderDate(new Date());
        Order o3 = new Order("Hoang", 400, new Date());
        Order o4 = new Order(4, "Chi", 600, new Date(), true, items);

        orders.add(o1);
        orders.add(o2);
        orders.add(o3);
        orders.add(o4);

        for (Order order : orders) {
            System.out.println(order.toString());
        }
    }
}
