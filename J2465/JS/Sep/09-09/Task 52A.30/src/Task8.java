import java.util.ArrayList;
import java.util.List;

public class Task8 {
    public static List<String> run(String input, int number) {
        List<String> words = new ArrayList<>();

        for (int i = 0; i < input.length(); i += number) {
            int end = Math.min(i + number, input.length());
            words.add(input.substring(i, end));
        }

        return words;
    }
}
