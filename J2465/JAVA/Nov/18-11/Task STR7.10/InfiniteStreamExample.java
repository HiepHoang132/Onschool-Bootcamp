import java.util.Random;
import java.util.stream.Stream;
public class InfiniteStreamExample {
   public static void main(String[] args) {
       // Tạo Stream vô hạn của các số ngẫu nhiên
       Stream<Integer> randomNumbers = Stream.generate(() -> new Random().nextInt(100));
       // Lọc các số lớn hơn 90 và dừng khi đạt 5 phần tử
       randomNumbers.filter(n -> n > 90)
                    .limit(5) // Dừng sau khi tìm được 5 phần tử thỏa mãn
                    .forEach(System.out::println);
   }
}