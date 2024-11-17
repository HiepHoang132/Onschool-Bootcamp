import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class ToSetExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 4, 5, 5);

        Set<Integer> result = numbers.stream().collect(Collectors.toSet());

        System.out.println(result);
    }
}
