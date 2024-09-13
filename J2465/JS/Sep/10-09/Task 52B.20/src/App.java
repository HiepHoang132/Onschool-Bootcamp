import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class App {
    public static void main(String[] args) throws Exception {
        // 1
        ArrayList<String> colors = new ArrayList<>();
        colors.add("red");
        colors.add("black");
        colors.add("yellow");
        colors.add("green");
        colors.add("orange");
        System.out.println(colors);
        System.out.println();

        // 2
        ArrayList<Integer> n1 = new ArrayList<>(Arrays.asList(1, 2, 3));
        ArrayList<Integer> n2 = new ArrayList<>(Arrays.asList(4, 5, 6));

        ArrayList<Integer> result = new ArrayList<>();
        for (int i = 0; i < n1.size(); i++) {
            result.add(n1.get(i) + n2.get(i));
        }
        System.out.println(result);
        System.out.println();

        // 3
        System.out.println(colors.size());
        System.out.println();

        // 4
        System.out.println(colors.get(3));
        System.out.println();

        // 5
        System.out.println(colors.getLast());
        System.out.println();

        // 6
        ArrayList<String> colorsV2 = new ArrayList<>();
        colorsV2.add("Red");
        colorsV2.add("Blue");
        colorsV2.add("Green");
        colorsV2.add("Yellow");
        colorsV2.add("Purple");
        colorsV2.removeLast();
        System.out.println(colorsV2);
        System.out.println();

        // 7
        colors.forEach(color -> System.out.println(color));
        System.out.println();

        // 8
        Iterator<String> iterator = colors.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
        System.out.println();

        // 9
        for (int i = 0; i < colors.size(); i++) {
            System.out.println(colors.get(i));
        }
        System.out.println();

        // 10
        colors.addFirst("white");
        System.out.println(colors);
        System.out.println();

        // 11
        ArrayList<String> colorsV3 = new ArrayList<>();
        colorsV3.add("red");
        colorsV3.add("black");
        colorsV3.add("yellow");
        colorsV3.add("green");
        colorsV3.add("orange");

        colorsV3.set(2, "mau vang");
        System.out.println(colorsV3);
        System.out.println();

        // 12
        ArrayList<String> names = new ArrayList<>();
        names.add("John");
        names.add("Alice");
        names.add("Bob");
        names.add("Steve");
        names.add("John");
        names.add("Steve");
        names.add("Maria");
        System.out.println(names.indexOf("Alice"));
        System.out.println(names.indexOf("Mark"));
        System.out.println();

        // 13
        System.out.println(names.lastIndexOf("Steve"));
        System.out.println(names.lastIndexOf("John"));
    }

}
