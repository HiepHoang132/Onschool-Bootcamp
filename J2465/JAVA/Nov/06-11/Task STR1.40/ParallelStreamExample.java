import java.util.Arrays;
import java.util.List;

public class ParallelStreamExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

       System.out.println("Sử dụng Stream song song:");
       numbers.parallelStream() // Tạo Stream song song
           .filter(n -> {
               System.out.println("Lọc số: " + n + " - " + Thread.currentThread().getName());
               return n % 2 == 0;
           })
           .map(n -> n * n)
           .forEach(n -> System.out.println("Kết quả: " + n + " - " + Thread.currentThread().getName()));
   }
}