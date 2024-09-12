public class Task8 {
    public static boolean run(double number) {
        if (number < 0)
            return false;
        return number == Math.floor(number);
    }
}
