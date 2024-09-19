public class Task12 {
    public static void run(String input, int number) {
        if (input.length() % number == 0) {
            for (int i = 0; i < input.length(); i += number) {
                System.out.println(input.substring(i, i + number));
            }
        } else {
            System.out.println("NO");
        }

    }
}
