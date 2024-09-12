public class Task6 {
    public static boolean run(Object input) {
        if (input instanceof Number) {
            return true;
        } else if (input instanceof String) {
            try {
                Double.parseDouble((String) input);
                return true;
            } catch (NumberFormatException e) {
                return false;
            }
        }
        return false;
    }
}
