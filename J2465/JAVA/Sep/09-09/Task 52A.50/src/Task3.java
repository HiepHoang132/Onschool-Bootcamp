import java.util.regex.Pattern;

public class Task3 {
    public static String run(String input, String substring) {
        return input.replaceAll(Pattern.quote(substring), "").trim();
    }
}