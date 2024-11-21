import java.util.Arrays;
import java.util.List;

public class StreamExample {
   public static void main(String[] args) {
       // Tạo danh sách các số nguyên
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

       // Sử dụng Stream API để lọc và in ra các số chẵn 
       numbers.stream()
            .filter(n -> n % 2 == 0) // Lọc các số chẵn
            .forEach(n -> System.out.println("Số chẵn: " + n)); // In ra các số chẵn
   }
}