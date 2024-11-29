import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

public class AsyncStreamExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        // Xử lý không đồng bộ mỗi phần tử trong danh sách
        List<CompletableFuture<Integer>> futures = numbers.stream()
                .map(n -> CompletableFuture.supplyAsync(() -> {
                    try {
                        Thread.sleep(1000); // Mô phỏng tác vụ tốn thời gian
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    return n * n; // Bình phương số
                }))
                .collect(Collectors.toList());
        // Chờ và thu thập kết quả từ tất cả các CompletableFuture
        List<Integer> results = futures.stream()
                .map(CompletableFuture::join) // Chờ kết quả của mỗi tác vụ không đồng bộ
                .collect(Collectors.toList());
        System.out.println("Kết quả xử lý không đồng bộ: " + results);
    }
}