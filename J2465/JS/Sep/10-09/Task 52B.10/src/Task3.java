import java.util.LinkedHashMap;
import java.util.Map;

public class Task3 {
    public static String run(String input) {
        Map<Character, Integer> charCount = new LinkedHashMap<>();

        for (Character ch : input.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey().toString();
            }
        }

        return "NO";

    }
}
