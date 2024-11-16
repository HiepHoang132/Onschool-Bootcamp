import java.util.Arrays;
import java.util.List;
public class CountExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Đếm số lượng tên bắt đầu bằng chữ "J"
       long count = names.stream()
                         .filter(name -> name.startsWith("J"))
                         .count();
       System.out.println("Số lượng tên bắt đầu bằng J: " + count);
   }
}