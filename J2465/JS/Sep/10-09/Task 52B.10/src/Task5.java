public class Task5 {
    public static boolean run(String input) {
        for (Character ch : input.toCharArray()) {
            if (Character.isDigit(ch)) {
                return false;
            }
        }
        return true;
    }
}
