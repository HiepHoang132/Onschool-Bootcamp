import java.util.stream.LongStream;

public class ParallelStreamPerformance {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        // Sử dụng Stream song song để tính tổng bình phương
        long result = LongStream.rangeClosed(1, 1_000_000_000)
                .parallel()
                .map(n -> n * n)
                .sum();
        long end = System.currentTimeMillis();
        System.out.println("Kết quả: " + result);
        System.out.println("Thời gian thực hiện: " + (end - start) + " ms");
    }
}
