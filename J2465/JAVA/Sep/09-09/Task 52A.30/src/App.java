import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println("\nTask 1");
        System.out.println(Task1.run("Devcamp"));
        System.out.println(Task1.run(1));

        // Task 2
        System.out.println("\nTask 2");
        System.out.println(Task2.run("Robin Singh", 4));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Arrays.toString(Task3.run("Robin Singh")));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run("Robin Singh from USA"));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Task5.run("JavaScript Exercises"));
        System.out.println(Task5.run("JavaScript exercises"));
        System.out.println(Task5.run("JavaScriptExercises"));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run("js string exercises"));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run("Ha!", 1));
        System.out.println(Task7.run("Ha!", 2));
        System.out.println(Task7.run("Ha!", 3));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(Task8.run("dcresource", 2));
        System.out.println(Task8.run("dcresource", 3));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Task9.run("The quick brown fox jumps over the lazy dog", "the"));

        // Task 10
        System.out.println("\nTask 10");
        System.out.println(Task10.run("0000", "123"));
    }
}
