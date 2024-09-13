import java.util.ArrayList;
import java.util.List;

public class Task6 {
    public static List<Integer> run(int[] n1, int[] n2) {
        int size = Math.max(n1.length, n2.length);
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < size; i++) {
            int val1 = i < n1.length ? n1[i] : 0;
            int val2 = i < n2.length ? n2[i] : 0;
            result.add(val1 + val2);
        }

        return result;
    }
}
