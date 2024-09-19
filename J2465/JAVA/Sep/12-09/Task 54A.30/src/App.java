public class App {
    public static void main(String[] args) throws Exception {
        Employee e1 = new Employee(0, "Hiep", "Hoang", 3000);
        Employee e2 = new Employee(0, "Nguyen", "Nguyen", 8000);

        System.out.println(e1);
        System.out.println("Name: " + e1.getName());
        System.out.println("Annual salary: " + e1.getAnnualSalary());

        System.out.println();
        System.out.println(e2);
        System.out.println("Name: " + e2.getName());
        System.out.println("Annual salary: " + e2.getAnnualSalary());

        e1.raiseSalary(50);
        e2.raiseSalary(10);
        System.out.println("Salary after raised: " + e1.getSalary());
        System.out.println("Salary after raised: " + e2.getSalary());
    }
}
