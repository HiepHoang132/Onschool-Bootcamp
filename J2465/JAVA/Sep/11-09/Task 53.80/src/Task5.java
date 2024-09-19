public class Task5 {
    public static int run(int number) {
        if (number % 5 == 0)
            return number;
        return (((number / 5) + 1) * 5);
    }
}
