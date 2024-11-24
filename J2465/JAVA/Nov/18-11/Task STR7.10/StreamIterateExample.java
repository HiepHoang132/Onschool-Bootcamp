import java.util.stream.Stream;
public class StreamIterateExample {
   public static void main(String[] args) {
       // Tạo Stream vô hạn từ dãy số
       Stream<Integer> infiniteStream = Stream.iterate(1, n -> n + 1);
       // Lấy các số từ dãy số cho đến khi gặp số lớn hơn 50
       infiniteStream.takeWhile(n -> n <= 50)
                     .forEach(System.out::println);
   }
}