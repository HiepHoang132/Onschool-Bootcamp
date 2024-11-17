import java.util.Arrays;
import java.util.List;

public class ParallelStreamConcept {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill", "Jim", "Jenny");
        System.out.println("Stream tuần tự:");

        names.stream().forEach(System.out::println);
        System.out.println("\nStream song song:");
        names.parallelStream().forEach(System.out::println);
    }
}
