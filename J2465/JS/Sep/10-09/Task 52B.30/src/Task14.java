public class Task14 {
    public static String run(String str1, String str2) {
        if (str1.length() > str2.length()) {
            str1 = str1.substring(str1.length() - str2.length());
        } else {
            str2 = str2.substring(str2.length() - str1.length());
        }

        return str1 + str2;
    }
}
