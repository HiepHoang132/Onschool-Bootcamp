public class Task10 {
    public static String run(String input, String pattern) {
        if (pattern.length() > input.length())
            return input;

        return input.substring(0, input.length() - pattern.length()) + pattern;
    }
}
