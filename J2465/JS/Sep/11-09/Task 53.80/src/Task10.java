public class Task10 {
    public static String run(int number) {
        String binary = "";

        // Integer.toBinaryString()
        while (number != 0) {
            int remainder = number % 2;
            binary = String.valueOf(remainder) + binary;
            number /= 2;
        }

        return binary;
    }
}
