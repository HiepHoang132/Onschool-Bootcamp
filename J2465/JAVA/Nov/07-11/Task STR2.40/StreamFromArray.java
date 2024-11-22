import java.util.Arrays;

public class StreamFromArray {
   public static void main(String[] args) {
       int[] numbers = {1, 2, 3, 4, 5};

       // Tạo Stream từ mảng và in ra các phần tử
       Arrays.stream(numbers)
             .forEach(System.out::println);
   }
}