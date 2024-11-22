
import java.util.Arrays;
import java.util.List;
public class LimitExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
       // Giới hạn chỉ in ra 5 phần tử đầu tiên
       numbers.stream()
              .limit(5)
              .forEach(System.out::println);
   }
}
