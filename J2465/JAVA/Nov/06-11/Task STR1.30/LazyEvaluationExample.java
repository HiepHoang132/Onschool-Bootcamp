import java.util.Arrays;
import java.util.List;

public class LazyEvaluationExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

       // Tạo Stream với các thao tác trung gian
       numbers.stream()
           .filter(n -> {
               System.out.println("Lọc số: " + n);
               return n % 2 == 0; // Chỉ lọc các số chẵn
           })
           .map(n -> {
               System.out.println("Bình phương số: " + n);
               return n * n; // Tính bình phương của số
           })
           .forEach(n -> System.out.println("Kết quả: " + n)); // In kết quả cuối cùng
   }
}