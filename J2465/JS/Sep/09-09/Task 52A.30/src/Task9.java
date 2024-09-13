public class Task9 {
    public static int run(String input, String wordChoice) {
        int count = 0;

        String[] words = input.toLowerCase().split("\\s+");
        for (String word : words) {
            if (word.equals(wordChoice))
                count++;
        }

        return count;
    }
}
