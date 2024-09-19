import java.util.Date;

public class App {
    public static void main(String[] args) throws Exception {
        Customer customer1 = new Customer("John Doe");
        Customer customer2 = new Customer("Jane Smith");

        customer1.setMember(true);
        customer1.setMemberType("Gold");

        customer2.setMember(true);
        customer2.setMemberType("Silver");

        System.out.println(customer1);
        System.out.println(customer2);
        System.out.println();

        Visit visit1 = new Visit(customer1.getName(), new Date());
        visit1.setServiceExpense(100);
        visit1.setProductExpense(50);

        Visit visit2 = new Visit(customer2.getName(), new Date());
        visit2.setServiceExpense(80);
        visit2.setProductExpense(30);

        System.out.println(visit1);
        System.out.println(visit2);
        System.out.println();

        System.out.println("Total expense for visit1: $" + visit1.getTotalExpense());
        System.out.println("Total expense for visit2: $" + visit2.getTotalExpense());
    }
}
