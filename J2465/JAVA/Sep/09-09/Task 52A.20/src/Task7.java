import java.util.List;

public class Task7 {
    public static List<Integer> run(List<Integer> numbers, int number) {
        for (int i = numbers.size() - 1; i >= 0; i--) {
            if (numbers.get(i) == number) {
                numbers.remove(i);
            }
        }
        return numbers;
    }
}
