public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println(sumNumbersV1());

        int[] n1 = { 1, 5, 10 };
        int[] n2 = { 1, 2, 3, 5, 7, 9 };

        System.out.println(sumNumbersV2(n1));
        System.out.println(sumNumbersV2(n2));

        printHello(24);
        printHello(99);
    }

    public static int sumNumbersV1() {
        int sum = 0;
        for (int i = 1; i < 101; i++) {
            sum += i;
        }
        return sum;
    }

    public static int sumNumbersV2(int[] numbers) {
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return sum;
    }

    public static void printHello(int number) {
        if (number % 2 == 0) {
            System.out.println("This " + number + " is even");
        } else {
            System.out.println("This " + number + " is odd");
        }
    }
}