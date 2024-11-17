import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ToListExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        List<String> result = names.stream()
                .filter(name -> name.startsWith("J"))
                .collect(Collectors.toList());
                
        System.out.println(result);
    }
}
