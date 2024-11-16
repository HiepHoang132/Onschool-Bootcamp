import java.util.Arrays;
import java.util.List;
public class ForEachExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Duyệt qua và in từng phần tử
       names.stream()
            .forEach(System.out::println);
   }
}