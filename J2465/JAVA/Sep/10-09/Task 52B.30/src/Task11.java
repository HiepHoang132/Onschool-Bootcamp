public class Task11 {
    public static String run(String input) {
        StringBuilder result = new StringBuilder();
        for (char ch : input.toCharArray()) {
            if (ch > 64 && ch < 91) {
                result.append(ch);
            }
        }
        return result.toString();
    }
}
