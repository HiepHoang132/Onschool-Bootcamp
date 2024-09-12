public class Task7 {
    public static boolean run(int number) {
        double log2 = Math.log(number) / Math.log(2);
        return log2 == Math.floor(log2);
    }
}
