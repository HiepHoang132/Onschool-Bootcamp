import java.util.Random;

public class Task8 {
    public static int run(int[] numbers) {
        int index = new Random().nextInt(numbers.length);
        return numbers[index];
    }
}
