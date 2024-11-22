import java.util.stream.Stream;

public class StreamOfExample {
   public static void main(String[] args) {
       // Tạo Stream từ nhiều phần tử và in các phần tử đó
       Stream.of("One", "Two", "Three", "Four")
             .forEach(System.out::println);
   }
}
