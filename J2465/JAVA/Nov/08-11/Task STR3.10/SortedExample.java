
import java.util.Arrays;
import java.util.List;
public class SortedExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 6);
       // Sắp xếp theo thứ tự tăng dần
       numbers.stream()
              .sorted()
              .forEach(System.out::println);
   }
}
