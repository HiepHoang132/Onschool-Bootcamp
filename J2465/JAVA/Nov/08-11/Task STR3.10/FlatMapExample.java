import java.util.Arrays;
import java.util.List;
public class FlatMapExample {
   public static void main(String[] args) {
       List<List<String>> namesList = Arrays.asList(
           Arrays.asList("John", "Jane"),
           Arrays.asList("Jack", "Jill"),
           Arrays.asList("Joe", "Jenny")
       );
       // Làm phẳng danh sách các danh sách thành một danh sách duy nhất
       namesList.stream()
                .flatMap(List::stream)
                .forEach(System.out::println);
   }
}



