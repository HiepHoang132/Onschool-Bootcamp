
import java.util.Arrays;
import java.util.List;
public class SkipExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
       // Bỏ qua 5 phần tử đầu tiên và in phần còn lại
       numbers.stream()
              .skip(5)
              .forEach(System.out::println);
   }
}
