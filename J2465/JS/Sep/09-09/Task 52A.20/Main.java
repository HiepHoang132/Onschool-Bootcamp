import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        // Task 1
        System.out.println(task1("Devcamp"));
        int[] numbers = { 1, 2, 3 };
        System.out.println(task1(numbers));

        // Task 2
        int[] numbers1 = { 1, 2, 3, 4, 5, 6 };
        System.out.println(task2(numbers1, 3));
        System.out.println(task2(numbers1, 6));

        // Task 3
        int[] numbers2 = { 3, 8, 7, 6, 5, -4, -3, 2, 1 };
        System.out.println(Arrays.toString(task3(numbers2)));

        // Task 4
        System.out.println(task4(numbers1, 3));
        System.out.println(task4(numbers1, 7));

        // Task 5
        int[] n1 = { 1, 2, 3 };
        int[] n2 = { 4, 5, 6 };
        System.out.println(Arrays.toString(task5(n1, n2)));
    }

    public static boolean task1(Object obj) {
        return obj != null && obj.getClass().isArray();
    }

    public static Integer task2(int[] numbers, int index) {
        if (index >= numbers.length)
            return null;
        return numbers[index];
    }

    public static int[] task3(int[] numbers) {
        Arrays.sort(numbers);
        return numbers;
    }

    public static int task4(int[] numbers, int number) {
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == number) {
                return i;
            }
        }
        return -1;
    }

    public static int[] task5(int[] numbers1, int[] numbers2) {
        int[] newArray = new int[numbers1.length + numbers2.length];

        System.arraycopy(numbers1, 0, newArray, 0, numbers1.length);
        System.arraycopy(numbers2, 0, newArray, numbers1.length, numbers2.length);
        return newArray;
    }
}
