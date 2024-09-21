import java.util.Random;

public class App {
    public static void main(String[] args) throws Exception {
        Random random = new Random();

        double randDouble = random.nextDouble() * 99 + 1;
        int randInt = random.nextInt(10) + 1;

        System.out.printf("Random value in double from 1 to 100: %f\n", randDouble);
        System.out.printf("Random value in int from 1 to 10: %d\n", randInt);
    }
}
