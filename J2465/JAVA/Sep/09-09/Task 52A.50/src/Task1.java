public class Task1 {
    public static int run(String input, char character) {
        int count = 0;
        for (int i = 0; i < input.length(); i++) {
            if (Character.toLowerCase(input.charAt(i)) == Character.toLowerCase(character)) {
                count++;
            }
        }
        return count;
    }
}
