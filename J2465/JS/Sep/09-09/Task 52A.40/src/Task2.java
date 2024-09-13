import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Task2 {
    public static List<Integer> run(List<Integer> n1, List<Integer> n2) {
        Set<Integer> result = new HashSet<>(n1);
        result.addAll(n2);
        return new ArrayList<>(result);
    }
}
