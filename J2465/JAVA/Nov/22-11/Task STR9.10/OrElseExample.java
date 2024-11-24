import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class OrElseExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Tìm tên bắt đầu bằng "Jo"
       Optional<String> result = names.stream()
                                      .filter(name -> name.startsWith("Jo"))
                                      .findFirst();
       // Nếu không tìm thấy, trả về giá trị mặc định
       String name = result.orElse("Không có tên phù hợp");
       System.out.println(name);
   }
}
