import java.util.ArrayList;
import java.util.List;

public class WithoutStreamExample {
   public static void main(String[] args) {
       List<Integer> numbers = new ArrayList<>();
       numbers.add(1);
       numbers.add(2);
       numbers.add(3);
       numbers.add(4);
       numbers.add(5);
       numbers.add(6);

       // Tạo một danh sách để chứa các kết quả
       List<Integer> evenNumbersSquared = new ArrayList<>();

       // Duyệt qua danh sách và thực hiện lọc và tính toán
       for (Integer number : numbers) {
           if (number % 2 == 0) { // Lọc ra các số chẵn
               evenNumbersSquared.add(number * number); // Tính bình phương của số chẵn
           }
       }

       // In kết quả
       System.out.println("Các số chẵn sau khi bình phương: " + evenNumbersSquared);
   }
}

