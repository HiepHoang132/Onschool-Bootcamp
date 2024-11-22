import java.util.stream.Stream;

public class StreamGenerateExample {
   public static void main(String[] args) {
       // Tạo Stream vô hạn từ số ngẫu nhiên
       Stream.generate(Math::random)
             .limit(5) // Giới hạn số phần tử để tránh vô hạn
             .forEach(System.out::println);
   }
}


