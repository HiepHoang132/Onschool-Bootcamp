public class App {
    public static void main(String[] args) throws Exception {
        // Task 1;
        System.out.println("Task 1");
        System.out.println(Task1.round(2.100212, 2));
        System.out.println(Task1.round(2.100212, 3));
        System.out.println(Task1.round(2100, 2));

        // Task 2;
        System.out.println("\nTask 2");
        System.out.println(Task2.generateRandom(1, 10));
        System.out.println(Task2.generateRandom(10, 20));

        // Task 3
        System.out.println("\nTask 3");
        System.out.println(Task3.calculateHypotenuse(2, 4));
        System.out.println(Task3.calculateHypotenuse(3, 4));

        // Task 4
        System.out.println("\nTask 4");
        System.out.println(Task4.run(64));
        System.out.println(Task4.run(94));

        // Task 5
        System.out.println("\nTask 5");
        System.out.println(Task5.run(32));
        System.out.println(Task5.run(137));

        // Task 6
        System.out.println("\nTask 6");
        System.out.println(Task6.run(12));
        System.out.println(Task6.run("abcd"));
        System.out.println(Task6.run("12"));

        // Task 7
        System.out.println("\nTask 7");
        System.out.println(Task7.run(16));
        System.out.println(Task7.run(18));
        System.out.println(Task7.run(256));

        // Task 8
        System.out.println("\nTask 8");
        System.out.println(Task8.run(-15));
        System.out.println(Task8.run(1));
        System.out.println(Task8.run(1.2));

        // Task 9
        System.out.println("\nTask 9");
        System.out.println(Task9.run(1000));
        System.out.println(Task9.run(10000.23));

        // Task 10
        System.out.println("\nTask 10");
        System.out.println(Task10.run(51));
        System.out.println(Task10.run(4));
    }
}
