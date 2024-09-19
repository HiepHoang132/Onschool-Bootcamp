import java.text.NumberFormat;
import java.util.Locale;

public class Task9 {
    public static String run(double number) {
        NumberFormat numberFormat = NumberFormat.getInstance(Locale.US);
        return numberFormat.format(number);
    }
}
