import java.util.stream.LongStream;
public class ParallelStreamOptimization {
   public static void main(String[] args) {
       long start = System.currentTimeMillis();
       // Sử dụng Stream song song để tính tổng bình phương của 1 tỷ số
       long sum = LongStream.rangeClosed(1, 1_000_000_000)
                            .parallel() // Chuyển sang xử lý song song
                            .map(n -> n * n)
                            .sum();
       long end = System.currentTimeMillis();
       System.out.println("Tổng bình phương: " + sum);
       System.out.println("Thời gian thực hiện: " + (end - start) + " ms");
   }
}