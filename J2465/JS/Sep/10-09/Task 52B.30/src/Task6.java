public class Task6 {
    public static int run(String input, char choice) {
        int count = 0;
        for (char ch : input.toCharArray()) {
            if (ch == choice)
                count++;
        }
        return count;
    }
}
