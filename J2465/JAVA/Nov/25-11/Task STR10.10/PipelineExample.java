import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class PipelineExample {
   public static void main(String[] args) {
       List<String> names = Arrays.asList("John", "Jane", "Jack", "Jim", "Jill");
       // Pipeline xử lý dữ liệu: lọc, chuyển đổi, sắp xếp, và thu thập kết quả
       List<String> result = names.stream()
                                  .filter(name -> name.startsWith("J")) // Bước 1: Lọc
                                  .map(String::toUpperCase)             // Bước 2: Chuyển đổi
                                  .sorted()                             // Bước 3: Sắp xếp
                                  .collect(Collectors.toList());        // Bước 4: Thu thập
       System.out.println(result);
   }
}