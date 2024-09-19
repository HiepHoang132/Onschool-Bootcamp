import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println("\nTask 1");
        System.out.println(Task1.run(4, 7));
        System.out.println(Task1.run(-4, 7));

        // Task 2
        System.out.println("\nTask 2");
        List<Integer> n1 = new ArrayList<>(Arrays.asList(1, 2, 3));
        List<Integer> n2 = new ArrayList<>(Arrays.asList(100, 2, 1, 10));
        List<Integer> n3 = new ArrayList<>(Arrays.asList(1, 2, 3));
        System.out.println(Task2.run(n1, n2));
        System.out.println(Task2.run(n1, n3));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Task3.run(new int[] { 1, 2, 1, 4, 5, 1, 1, 3, 1 }, 1));
        System.out.println(Task3.run(new int[] { 1, 2, 1, 4, 5, 1, 1, 3, 1 }, 2));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run(new int[] { 1, 2, 3, 4, 5, 6 }));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Task5.run(new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run(new int[] { 1, 0, 2, 3, 4 }, new int[] { 3, 5, 6, 7, 8, 13 }));
        System.out.println(Task6.run(new int[] { 1, 2, 3 }, new int[] { 1, 2, 3, 4, 5 }));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run(new ArrayList<>(Arrays.asList(1, 2, 3, 1, 5, 1, 4, 6, 3, 4))));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(
                Task8.run(new ArrayList<>(Arrays.asList(1, 2, 3)), new ArrayList<>(Arrays.asList(100, 2, 1, 10))));
        System.out.println(
                Task8.run(new ArrayList<>(Arrays.asList(1, 2, 3)), new ArrayList<>(Arrays.asList(1, 2, 3))));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Task9.run(new ArrayList<>(Arrays.asList(1, 3, 1, 4, 2, 5, 6))));

        // Task 10
        System.out.println("\nTask 10");

        List<Object> list1 = new ArrayList<>(Arrays.asList(10, 20, 30, 40, "52A"));
        System.out.println(Task10.run(list1, 0, 2));

        List<Object> list2 = new ArrayList<>(Arrays.asList(10, 20, 30, 40, "52A"));
        System.out.println(Task10.run(list2, 1, 2));
    }
}
