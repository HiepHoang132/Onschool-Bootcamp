import java.math.BigDecimal;
import java.math.RoundingMode;

public class Task1 {
    public static BigDecimal round(double number, int roundTo) {
        BigDecimal bd = new BigDecimal(Double.toString(number));
        bd = bd.setScale(roundTo, RoundingMode.HALF_UP);
        return bd;
    }
}
