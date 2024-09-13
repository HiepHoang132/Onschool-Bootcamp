import java.util.ArrayList;
import java.util.List;

public class Task6 {
    public static List<Object> run(Object[] items) {
        List<Object> filteredList = new ArrayList<>();

        for (Object item : items) {
            if (item instanceof Number || item instanceof String) {
                filteredList.add(item);
            }
        }

        return filteredList;
    }
}
