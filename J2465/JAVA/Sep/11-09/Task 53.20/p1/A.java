public class A {
    private int privateProp = 1;
    int defaultProp = 2;
    protected int protectedProp = 3;
    public int publicProp = 4;

    public void displayProperties() {
        System.out.println("Private Property: " + privateProp);
        System.out.println("Default Property: " + defaultProp);
        System.out.println("Protected Property: " + protectedProp);
        System.out.println("Public Property: " + publicProp);
    }
}
