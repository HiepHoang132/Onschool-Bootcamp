public class App {
    public static void main(String[] args) throws Exception {
        Account a1 = new Account("Hiep", "Hoang");
        Account a2 = new Account("Mai", "Chi", 1000);

        System.out.println(a1);
        System.out.println(a2);

        a1.credit(2000);
        a2.credit(3000);
        System.out.println();
        System.out.println(a1);
        System.out.println(a2);

        System.out.println();
        a1.debit(1000);
        a2.debit(5000);
        System.out.println(a1);
        System.out.println(a2);

        System.out.println();
        a1.transferTo(a2, 2000);
        System.out.println(a1);
        System.out.println(a2);

        System.out.println();
        a2.transferTo(a1, 2000);
        System.out.println(a1);
        System.out.println(a2);
    }
}
