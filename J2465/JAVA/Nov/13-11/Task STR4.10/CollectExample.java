import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class CollectExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

       // Lọc tên bắt đầu bằng "J" và thu thập chúng vào một List
       List<String> result = names.stream()
                                  .filter(name -> name.startsWith("J"))
                                  .collect(Collectors.toList());
       System.out.println(result);
   }
}