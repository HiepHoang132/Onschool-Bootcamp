public class App {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println("\nTask 1");
        System.out.println(Task1.run("Java"));
        System.out.println(Task1.run("Devcamp JAVA exercise"));
        System.out.println(Task1.run("Devcamp"));

        // Task 2
        System.out.println("\nTask 2");
        System.out.println(Task2.run("word", "drow"));
        System.out.println(Task2.run("java", "js"));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Task3.run("Java"));
        System.out.println(Task3.run("Haha"));
        System.out.println(Task3.run("Devcamp"));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run("word"));
        System.out.println(Task4.run("java"));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Task5.run("abc"));
        System.out.println(Task5.run("a1bc"));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run("java"));
        System.out.println(Task6.run("devcamp"));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run("1234"));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(Task8.run("devcamp java", 'a', 'b'));
        System.out.println(Task8.run("exercise", 'e', 'f'));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Task9.run("I am developer"));

        // Task 10
        System.out.println("\nTask 10");
        System.out.println(Task10.run("aba"));
        System.out.println(Task10.run("abc"));
    }
}
