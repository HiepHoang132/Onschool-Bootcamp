import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Locale;

public class Order {
    int id;
    String customerName;
    long price;
    Date orderDate;
    boolean confirm;
    String[] items;

    public Order() {
    }

    public Order(String customerName, long price) {
        this.customerName = customerName;
        this.price = price;
    }

    public Order(String customerName, long price, Date orderDate) {
        this.customerName = customerName;
        this.price = price;
        this.orderDate = orderDate;
    }

    public Order(int id, String customerName, long price, Date orderDate, boolean confirm, String[] items) {
        this.id = id;
        this.customerName = customerName;
        this.price = price;
        this.orderDate = orderDate;
        this.confirm = confirm;
        this.items = items;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public boolean isConfirm() {
        return confirm;
    }

    public void setConfirm(boolean confirm) {
        this.confirm = confirm;
    }

    public String[] getItems() {
        return items;
    }

    public void setItems(String[] items) {
        this.items = items;
    }

    @Override
    public String toString() {
        Locale locale = Locale.of("vi", "VN");
        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(locale);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");

        return "Order [id=" + id + ", customerName=" + customerName + ", price=" + currencyFormat.format(price)
                + ", orderDate=" + simpleDateFormat.format(orderDate)
                + ", confirm=" + confirm + ", items=" + Arrays.toString(items) + "]";
    }

}
