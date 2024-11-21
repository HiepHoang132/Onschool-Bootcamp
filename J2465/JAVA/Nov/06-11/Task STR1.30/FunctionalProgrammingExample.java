import java.util.Arrays;
import java.util.List;

public class FunctionalProgrammingExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill", "Joe");

       // Sử dụng Stream API để lọc và chuyển đổi danh sách
       names.stream()
           .filter(name -> name.startsWith("J")) // Lọc các tên bắt đầu với 'J'
           .map(String::toUpperCase) // Chuyển tên thành chữ hoa
           .forEach(System.out::println); // In kết quả
   }
}
