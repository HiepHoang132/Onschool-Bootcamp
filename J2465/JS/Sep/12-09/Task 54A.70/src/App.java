public class App {
    public static void main(String[] args) throws Exception {
        Time time1 = new Time(23, 59, 59);
        System.out.println(time1);
        time1.nextSecond();
        System.out.println(time1);

        System.out.println();
        Time time2 = new Time(0, 0, 0);
        System.out.println(time2);
        time2.previousSecond();
        System.out.println(time2);
    }
}
