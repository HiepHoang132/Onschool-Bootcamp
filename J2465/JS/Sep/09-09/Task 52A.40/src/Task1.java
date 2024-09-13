import java.util.ArrayList;
import java.util.List;

public class Task1 {
    public static List<Integer> run(int start, int end) {
        List<Integer> numbers = new ArrayList<>();

        for (int i = start; i <= end; i++) {
            numbers.add(i);
        }
        return numbers;
    }
}