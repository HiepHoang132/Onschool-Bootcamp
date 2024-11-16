import java.util.Arrays;
import java.util.List;
public class MatchExample {
   public static void main(String[] args) {
       List<Integer> numbers = Arrays.asList(2, 4, 6, 8, 10);
       // Kiểm tra nếu tất cả các số là chẵn
       boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0);
       System.out.println("Tất cả các số là chẵn: " + allEven);
       // Kiểm tra nếu có bất kỳ số lẻ nào
       boolean anyOdd = numbers.stream().anyMatch(n -> n % 2 != 0);
       System.out.println("Có số lẻ: " + anyOdd);
   }
}