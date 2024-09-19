import java.util.regex.Pattern;

public class Task17 {
    public static boolean run(String input) {
        String regex = "^[A-Z][A-Za-z0-9]{0,18}[0-9]$";
        Pattern pattern = Pattern.compile(regex);
        return pattern.matcher(input).matches();
    }
}
