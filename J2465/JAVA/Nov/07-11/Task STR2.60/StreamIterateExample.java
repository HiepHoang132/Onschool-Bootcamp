import java.util.stream.Stream;

public class StreamIterateExample {
   public static void main(String[] args) {
       // Tạo dãy số vô hạn bắt đầu từ 1, mỗi số tăng thêm 2
       Stream.iterate(1, n -> n + 2)
             .limit(5) // Giới hạn số phần tử
             .forEach(System.out::println);
   }
}


