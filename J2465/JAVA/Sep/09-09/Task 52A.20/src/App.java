import java.util.ArrayList;
import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println("\nTask 1");
        System.out.println(Task1.run("Devcamp"));
        System.out.println(Task1.run(new int[] { 1, 2, 3 }));

        // Task 2
        System.out.println("\nTask 2");
        System.out.println(Task2.run(new int[] { 1, 2, 3, 4, 5, 6 }, 3));
        System.out.println(Task2.run(new int[] { 1, 2, 3, 4, 5, 6 }, 6));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Arrays.toString(Task3.run(new int[] { 3, 8, 7, 6, 5, -4, -3, 2, 1 })));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run(new int[] { 1, 2, 3, 4, 5, 6 }, 3));
        System.out.println(Task4.run(new int[] { 1, 2, 3, 4, 5, 6 }, 7));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Arrays.toString(Task5.run(new int[] { 1, 2, 3 }, new int[] { 4, 5, 6 })));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run(new Object[] { true, 0, 15, false, -22, "html", "develop", 47, null }));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run(new ArrayList<>(Arrays.asList(2, 5, 9, 6)), 5));
        System.out.println(Task7.run(new ArrayList<>(Arrays.asList(2, 9, 6)), 5));
        System.out.println(Task7.run(new ArrayList<>(Arrays.asList(2, 5, 9, 6)), 9));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(Task8.run(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 }));
        System.out.println(Task8.run(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 }));
        System.out.println(Task8.run(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 }));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Arrays.toString(Task9.run(6, 0)));
        System.out.println(Arrays.toString(Task9.run(4, 11)));

        // Task 10
        System.out.println("\nTask 10");
        System.out.println(Task10.run(1, 4));
        System.out.println(Task10.run(-6, 4));
    }
}
