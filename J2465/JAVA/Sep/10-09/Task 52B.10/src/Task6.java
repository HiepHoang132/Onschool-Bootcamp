public class Task6 {
    public static int run(String input) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (Character ch : input.toCharArray()) {
            if (vowels.indexOf(ch) != -1) {
                count++;
            }
        }
        return count;
    }
}
