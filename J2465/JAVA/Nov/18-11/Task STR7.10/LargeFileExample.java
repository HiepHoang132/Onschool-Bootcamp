import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;
public class LargeFileExample {
   public static void main(String[] args) {
        String filePath = "./example.txt"; // Giả sử file này rất lớn
       // Đọc file bằng Files.lines() và xử lý mỗi dòng
       try (Stream<String> lines = Files.lines(Paths.get(filePath))) {
           lines.filter(line -> line.contains("error")) // Lọc các dòng có từ "error"
                .forEach(System.out::println); // In ra các dòng có lỗi
       } catch (IOException e) {
           e.printStackTrace();
       }
   }
}