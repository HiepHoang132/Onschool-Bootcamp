public class Task16 {
    public static boolean run(String input) {
        for (char ch : input.toCharArray()) {
            if (Character.isDigit(ch))
                return true;
        }
        return false;
    }
}
