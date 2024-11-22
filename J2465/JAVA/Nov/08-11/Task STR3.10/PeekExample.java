import java.util.Arrays;
import java.util.List;
public class PeekExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Kiểm tra và in từng phần tử mà không thay đổi Stream
       names.stream()
            .peek(name -> System.out.println("Tên: " + name))
            .map(String::toUpperCase)
            .forEach(System.out::println);
   }
}
