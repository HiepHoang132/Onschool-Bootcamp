import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class MinMaxExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(5, 3, 9, 1, 4);
       // Tìm số nhỏ nhất
       Optional<Integer> min = numbers.stream().min(Integer::compareTo);
       System.out.println("Số nhỏ nhất: " + min.get());
       // Tìm số lớn nhất
       Optional<Integer> max = numbers.stream().max(Integer::compareTo);
       System.out.println("Số lớn nhất: " + max.get());
   }
}