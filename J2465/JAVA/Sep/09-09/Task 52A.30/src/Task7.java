public class Task7 {
    public static String run(String input, int number) {
        StringBuilder sb = new StringBuilder();
        if (number < 0)
            return "";
        for (int i = 0; i < number; i++) {
            if (i > 0)
                sb.append(" ");
            sb.append(input);
        }
        return sb.toString();
    }
}
