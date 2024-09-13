import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class Task7 {
    public static List<Integer> run(List<Integer> numbers) {
        return new ArrayList<>(new HashSet<>(numbers));
    }
}
