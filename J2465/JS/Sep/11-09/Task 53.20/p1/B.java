public class B {
    public static void main(String[] args) {
        A a = new A();
        // System.out.println("Private Property: " + a.privateProp); // Not accessible
        System.out.println("Default Property: " + a.defaultProp); // Accessible
        System.out.println("Protected Property: " + a.protectedProp); // Accessible
        System.out.println("Public Property: " + a.publicProp); // Accessible
    }
}
