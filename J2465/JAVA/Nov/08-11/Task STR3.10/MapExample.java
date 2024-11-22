
import java.util.Arrays;
import java.util.List;
public class MapExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
       // Nhân đôi giá trị của mỗi phần tử
       numbers.stream()
              .map(n -> n * 2)
              .forEach(System.out::println);
   }
}