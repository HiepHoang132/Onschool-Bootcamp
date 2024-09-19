public class Task10 {
    public static int run(String input) {
        int count = 0;
        for (char ch : input.toCharArray()) {
            if (Character.isUpperCase(ch))
                count++;
        }
        return count;
    }
}
