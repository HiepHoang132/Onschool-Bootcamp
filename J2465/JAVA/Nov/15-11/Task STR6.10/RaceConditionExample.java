import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class RaceConditionExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        AtomicInteger sum = new AtomicInteger(0);
        // Tính tổng song song có thể gây ra race condition nếu không đồng bộ
        numbers.parallelStream()
                .forEach(n -> sum.addAndGet(n));
        System.out.println("Tổng: " + sum);
    }
}
