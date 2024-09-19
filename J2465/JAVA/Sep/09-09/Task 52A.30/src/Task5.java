public class Task5 {
    public static String run(String input) {
        String[] words = input.split("\\s+");
        StringBuilder sb = new StringBuilder();

        for (String word : words) {
            sb.append(word.substring(0, 1).toUpperCase()).append(word.substring(1));
        }

        return sb.toString();
    }
}
