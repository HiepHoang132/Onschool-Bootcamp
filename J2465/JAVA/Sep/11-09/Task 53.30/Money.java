import java.math.BigDecimal;
import java.text.NumberFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Money {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(new Locale("vi", "VN"));
        Locale usLocale = Locale.getDefault();
        double number = 102300.456d;
        NumberFormat usNumberFormat = NumberFormat.getInstance(usLocale);
        System.out.println(usNumberFormat.format(number));
        // Currency
        BigDecimal number1 = new BigDecimal(102_300.456d);
        NumberFormat usNumberFormat1 = NumberFormat.getCurrencyInstance(usLocale);
        System.out.println(usNumberFormat1.format(number1));
        // Date time
        LocalDateTime localDateTime = LocalDateTime.of(2022, 3, 31, 10, 15, 50, 500);
        String pattern = "dd-MMMM-yyyy  HH: mm: ss,SSS";
        DateTimeFormatter defaultTimeFormatter = DateTimeFormatter.ofPattern(pattern);
        System.out.println(defaultTimeFormatter.format(localDateTime));
    }
}