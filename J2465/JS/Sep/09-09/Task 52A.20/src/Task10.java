import java.util.ArrayList;
import java.util.List;

public class Task10 {
    public static List<Integer> run(int start, int end) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < end; i++) {
            numbers.add(i + start);
        }
        return numbers;
    }
}
