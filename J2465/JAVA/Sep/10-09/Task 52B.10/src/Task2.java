public class Task2 {
    public static String run(String str1, String str2) {
        return new StringBuilder(str2).reverse().toString().equals(str1) ? "OK" : "NO";
    }
}
