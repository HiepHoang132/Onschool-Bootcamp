public class App {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println("\nTask 1");
        System.out.println(Task1.run("DCresource: JavaScript Exercises", 'e'));

        // Task 2
        System.out.println("\nTask 2");
        System.out.println(Task2.run("dcresource "));
        System.out.println(Task2.run(" dcresource"));
        System.out.println(Task2.run(" dcresource "));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Task3.run("The quick brown fox jumps over the lazy dog", "the"));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run("JS PHP PYTHON", "PYTHON"));
        System.out.println(Task4.run("JS PHP PYTHON", "JS"));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Task5.run("abcd", "AbcD"));
        System.out.println(Task5.run("ABCD", "Abce"));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run("JsSTRING EXERCISES", 1));
        System.out.println(Task6.run("JsSTRING EXERCISES", 2));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run("JsSTRING EXERCISES", 1));
        System.out.println(Task7.run("JsSTRING EXERCISES", 2));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(Task8.run("jsstring exercises", "js"));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Task9.run("abc"));
        System.out.println(Task9.run(""));

        // Task 10
        System.out.println("\nTask 10");
        System.out.println(Task10.run("AaBbc"));
    }
}
