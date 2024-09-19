import java.util.HashMap;
import java.util.Map;

public class Task1 {
    public static String run(String input) {
        input = input.toLowerCase();

        Map<Character, Integer> charCount = new HashMap<>();
        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
            }
        }

        StringBuilder duplicates = new StringBuilder();
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() > 1) {
                duplicates.append(entry.getKey());
            }
        }
        return duplicates.length() > 0 ? duplicates.toString() : "NO";
    }
}
