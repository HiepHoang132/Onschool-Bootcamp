import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class FindFirstExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Tìm phần tử đầu tiên
       Optional<String> first = names.stream().findFirst();
       System.out.println("Phần tử đầu tiên: " + first.get());
   }
}