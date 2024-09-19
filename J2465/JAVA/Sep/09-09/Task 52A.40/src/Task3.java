public class Task3 {
    public static int run(int[] numbers, int n) {
        int count = 0;
        for (int number : numbers) {
            if (number == n) {
                count++;
            }
        }
        return count;
    }
}
