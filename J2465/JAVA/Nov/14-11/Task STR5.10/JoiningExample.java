import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class JoiningExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        String result = names.stream()
                .collect(Collectors.joining(", "));
        System.out.println(result);
    }
}
