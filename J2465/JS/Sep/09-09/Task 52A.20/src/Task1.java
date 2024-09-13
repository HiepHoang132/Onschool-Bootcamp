public class Task1 {
    public static boolean run(Object obj) {
        return obj != null && obj.getClass().isArray();
    }
}
