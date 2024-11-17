import java.util.Arrays;
import java.util.List;

public class SequentialToParallelStreamExample {
   public static void main(String[] args) {
      List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

      names.stream()
            .parallel()
            .forEach(name -> System.out.println(name + " - "
                  + Thread.currentThread().getName()));
   }
}
