public class Task5 {
    public static int[] run(int[] numbers1, int[] numbers2) {
        int[] newArray = new int[numbers1.length + numbers2.length];

        System.arraycopy(numbers1, 0, newArray, 0, numbers1.length);
        System.arraycopy(numbers2, 0, newArray, numbers1.length, numbers2.length);
        return newArray;
    }
}
