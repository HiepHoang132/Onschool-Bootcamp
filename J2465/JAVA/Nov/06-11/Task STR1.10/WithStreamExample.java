import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class WithStreamExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

       // Sử dụng Stream API để lọc và tính toán
       List<Integer> evenNumbersSquared = numbers.stream() // Tạo Stream từ danh sách
           .filter(n -> n % 2 == 0) // Lọc các số chẵn
           .map(n -> n * n) // Tính bình phương
           .collect(Collectors.toList()); // Thu thập kết quả vào danh sách

       // In kết quả
       System.out.println("Các số chẵn sau khi bình phương: " + evenNumbersSquared);
   }
}



