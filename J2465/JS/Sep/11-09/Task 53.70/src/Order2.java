import java.util.Date;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Locale;

public class Order2 {
    int id;
    String customerName;
    int price;
    Date orderDate;
    Boolean confirm;
    String[] items;
    Person buyer;

    public Order2() {
    }

    public Order2(String customerName, int price) {
        this.customerName = customerName;
        this.price = price;
    }

    public Order2(String customerName, int price, Date orderDate) {
        this.customerName = customerName;
        this.price = price;
        this.orderDate = orderDate;
    }

    public Order2(int id, String customerName, int price, Date orderDate, Boolean confirm, String[] items,
            Person buyer) {
        this.id = id;
        this.customerName = customerName;
        this.price = price;
        this.orderDate = orderDate;
        this.confirm = confirm;
        this.items = items;
        this.buyer = buyer;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Boolean getConfirm() {
        return confirm;
    }

    public void setConfirm(Boolean confirm) {
        this.confirm = confirm;
    }

    public String[] getItems() {
        return items;
    }

    public void setItems(String[] items) {
        this.items = items;
    }

    public Person getBuyer() {
        return buyer;
    }

    public void setBuyer(Person buyer) {
        this.buyer = buyer;
    }

    @Override
    public String toString() {
        Locale locale = Locale.of("vi", "VN");
        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(locale);

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

        return "Order2 [id=" + id + ", customerName=" + customerName + ", price=" + currencyFormat.format(price)
                + ", orderDate=" + dateFormat.format(orderDate)
                + ", confirm=" + confirm + ", items=" + Arrays.toString(items) + ", buyer=" + buyer.toString() + "]";
    }

}