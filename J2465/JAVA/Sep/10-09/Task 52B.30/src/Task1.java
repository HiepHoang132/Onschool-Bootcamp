import java.util.HashSet;
import java.util.Set;

public class Task1 {
    public static String run(String input) {
        StringBuilder result = new StringBuilder();
        Set<Character> seen = new HashSet<>();

        for (char ch : input.toCharArray()) {
            if (!seen.contains(ch)) {
                seen.add(ch);
                result.append(ch);
            }
        }
        return result.toString();

    }
}
