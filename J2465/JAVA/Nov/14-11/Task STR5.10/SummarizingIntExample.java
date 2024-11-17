import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.stream.Collectors;

public class SummarizingIntExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        IntSummaryStatistics stats = names.stream()
                .collect(Collectors.summarizingInt(String::length));
        System.out.println("Tổng: " + stats.getSum());
        System.out.println("Trung bình: " + stats.getAverage());
        System.out.println("Nhỏ nhất: " + stats.getMin());
        System.out.println("Lớn nhất: " + stats.getMax());
        System.out.println("Số lượng: " + stats.getCount());
    }
}
