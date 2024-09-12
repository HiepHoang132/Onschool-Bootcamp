package p2;

import p1.A;

public class D {
    public static void main(String[] args) {
        A a = new A();
        // System.out.println("Private Property: " + a.privateProp); // Not accessible
        // System.out.println("Default Property: " + a.defaultProp); // Not accessible
        // System.out.println("Protected Property: " + a.protectedProp); // Not accessible
        System.out.println("Public Property: " + a.publicProp); // Accessible
    }
}
