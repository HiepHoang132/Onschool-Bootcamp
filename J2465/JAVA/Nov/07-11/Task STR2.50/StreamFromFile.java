import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class StreamFromFile {
    public static void main(String[] args) {
        try (Stream<String> lines = Files.lines(Paths.get("example.txt"))) {
            // Tạo Stream từ file và in từng dòng trong file
            lines.forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}