import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Product {
    String name;
    String category;
    boolean isExpired;

    Product(String name, String category, boolean isExpired) {
        this.name = name;
        this.category = category;
        this.isExpired = isExpired;
    }

    public boolean isExpired() {
        return isExpired;
    }

}

public class RealWorldExample1 {
    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
                new Product("Laptop", "Electronics", false),
                new Product("Phone", "Electronics", false),
                new Product("Milk", "Groceries", true),
                new Product("Bread", "Groceries", true),
                new Product("TV", "Electronics", false),
                new Product("Apple", "Groceries", true));
        // Lọc các sản phẩm hết hạn và nhóm theo danh mục
        Map<String, List<Product>> expiredProductsByCategory = products.stream()
                .filter(Product::isExpired)
                .collect(Collectors.groupingBy(product -> product.category));
        expiredProductsByCategory.forEach((category, expiredProducts) -> {
            System.out.println("Danh mục: " + category);
            expiredProducts.forEach(p -> System.out.println("  - " + p.name));
        });
    }
}