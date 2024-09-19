public class Task9 {
    public static String run(String input) {
        StringBuilder reversed = new StringBuilder();
        String[] words = input.split("\\s+");

        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]).append(" ");
        }

        return reversed.toString().trim();
    }
}
