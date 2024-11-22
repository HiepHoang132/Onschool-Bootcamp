import java.util.Arrays;
import java.util.List;
import java.util.Comparator;
public class SortedDescendingExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 6);
       // Sắp xếp theo thứ tự giảm dần
       numbers.stream()
              .sorted(Comparator.reverseOrder())
              .forEach(System.out::println);
   }
}
