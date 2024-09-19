public class App {
    public static void main(String[] args) throws Exception {
        Person person1 = new Person("Alice", "123 Main St");
        Person person2 = new Person("Bob", "456 Elm St");

        System.out.println(person1);
        System.out.println(person2);
        System.out.println();

        Student student1 = new Student("Charlie", "789 Pine St", "Computer Science", 2, 1200.50);
        Student student2 = new Student("Diana", "321 Oak St", "Mathematics", 3, 1500.75);

        System.out.println(student1);
        System.out.println(student2);
        System.out.println();

        Staff staff1 = new Staff("Edward", "654 Maple St", "High School", 5000.00);
        Staff staff2 = new Staff("Fiona", "987 Birch St", "University", 6000.00);

        System.out.println(staff1);
        System.out.println(staff2);
    }
}
