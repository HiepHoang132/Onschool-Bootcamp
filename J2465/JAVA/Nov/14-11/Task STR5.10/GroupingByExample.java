import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class GroupingByExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill", "Tom", "Anna");

        Map<Integer, List<String>> groupedNames = names.stream()
                .collect(Collectors.groupingBy(String::length));
        System.out.println(groupedNames);
    }
}