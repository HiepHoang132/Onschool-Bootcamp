import java.util.Arrays;
import java.util.List;

public class SequentialStreamExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

       System.out.println("Sử dụng Stream tuần tự:");
       numbers.stream() // Tạo Stream tuần tự
           .filter(n -> {
               System.out.println("Lọc số: " + n);
               return n % 2 == 0;
           })
           .map(n -> n * n)
           .forEach(n -> System.out.println("Kết quả: " + n));
   }
}