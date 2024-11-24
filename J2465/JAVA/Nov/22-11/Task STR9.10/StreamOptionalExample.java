import java.util.Arrays;
import java.util.List;
import java.util.Optional;
public class StreamOptionalExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");
       // Tìm tên bắt đầu bằng "Jo"
       Optional<String> result = names.stream()
                                      .filter(name -> name.startsWith("Jo"))
                                      .findFirst();
       // Xử lý kết quả với Optional
       result.ifPresentOrElse(
           name -> System.out.println("Tên tìm thấy: " + name),
           () -> System.out.println("Không tìm thấy tên nào bắt đầu bằng 'Jo'")
       );
   }
}


