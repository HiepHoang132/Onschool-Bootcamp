import java.util.Collections;
import java.util.List;

public class Task9 {
    public static List<Integer> run(List<Integer> numbers) {
        Collections.sort(numbers, Collections.reverseOrder());
        return numbers;
    }
}
