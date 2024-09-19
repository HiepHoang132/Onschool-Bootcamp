import java.util.ArrayList;
import java.util.List;

public class Task5 {
    public static List<Integer> run(List<Integer> numbers) {
        List<Integer> evens = new ArrayList<>();
        for (int number : numbers) {
            if (number % 2 == 0)
                evens.add(number);
        }

        return evens;
    }
}
