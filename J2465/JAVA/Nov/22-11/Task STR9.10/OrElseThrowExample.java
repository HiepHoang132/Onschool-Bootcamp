import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class OrElseThrowExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Tìm tên bắt đầu bằng "Jo"
       Optional<String> result = names.stream()
                                      .filter(name -> name.startsWith("Ju"))
                                      .findFirst();
       // Ném ngoại lệ nếu không tìm thấy
       String name = result.orElseThrow(() -> new RuntimeException("Không tìm thấy tên phù hợp!"));
       System.out.println(name);
   }
}


