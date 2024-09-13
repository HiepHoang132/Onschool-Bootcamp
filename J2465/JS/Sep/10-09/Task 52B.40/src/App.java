import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        // 1
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(100);
        numbers.add(2320);
        numbers.add(66);
        numbers.add(33);
        numbers.add(102435);
        numbers.add(15);
        numbers.add(40);
        numbers.add(1565);
        numbers.add(105);
        numbers.add(1070);

        System.out.println("Task 1");
        System.out.println(numbers);
        Collections.sort(numbers);
        System.out.println(numbers);

        // 2
        System.out.println("\nTask 2");
        ArrayList<Integer> numbersV2 = new ArrayList<>();
        for (int n : numbers) {
            if (n > 9 && n < 101) {
                numbersV2.add(n);
            }
        }
        System.out.println(numbersV2);

        // 3
        System.out.println("\nTask 3");
        ArrayList<String> colors = new ArrayList<>();
        colors.add("yellow");
        colors.add("green");
        colors.add("black");
        colors.add("white");
        colors.add("green");
        System.out.println(colors.contains("yellow") ? "OK" : "NO");

        // 4
        System.out.println("\nTask 4");
        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        System.out.println(sum);

        // 5
        System.out.println("\nTask 5");
        colors.removeAll(colors);
        System.out.println(colors);

        // 6
        System.out.println("\nTask 6");

        colors.add("yellow");
        colors.add("green");
        colors.add("black");
        colors.add("white");
        colors.add("brown");
        colors.add("purple");
        colors.add("red");
        colors.add("white");
        colors.add("cyan");
        colors.add("orange");

        Collections.shuffle(colors);
        System.out.println(colors);

        // 7
        System.out.println("\nTask 7");
        Collections.reverse(colors);
        System.out.println(colors);

        // 8
        System.out.println("\nTask 8");
        List<String> subList = colors.subList(2, 7);
        System.out.println(subList);

        // 9
        System.out.println("\nTask 9");
        Collections.swap(colors, 2, 6);
        System.out.println(colors);

        // 10
        System.out.println("\nTask 10");
        ArrayList<Integer> n1 = new ArrayList<>();
        n1.add(1);
        n1.add(2);
        n1.add(3);

        ArrayList<Integer> n2 = new ArrayList<>();
        n2.add(4);
        n2.add(5);
        n2.add(6);

        System.out.println(n1);
        System.out.println(n2);
        
        n2.clear();
        n2.addAll(n1);
        System.out.println("List 1 after copy: " + n1);
        System.out.println("List 2 after copy: " + n2);
    }
}
