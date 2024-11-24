import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class OrElseGetExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Tìm tên bắt đầu bằng "Ja"
       Optional<String> result = names.stream()
                                      .filter(name -> name.startsWith("Ja"))
                                      .findFirst();
       // Nếu không tìm thấy, cung cấp giá trị mặc định từ Supplier
       String name = result.orElseGet(() -> "Tên mặc định");
       System.out.println(name);
   }
}

