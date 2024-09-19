public class App {
    public static void main(String[] args) throws Exception {
        Circle circle1 = new Circle(1.0);
        Circle circle2 = new Circle(2.0);
        Circle circle3 = new Circle(3.0, "green");

        System.out.println(circle1);
        System.out.println("Area of circle1: " + circle1.getArea());
        System.out.println(circle2);
        System.out.println("Area of circle2: " + circle2.getArea());
        System.out.println(circle3);
        System.out.println("Area of circle3: " + circle3.getArea());

        Cylinder cylinder1 = new Cylinder(1.0);
        Cylinder cylinder2 = new Cylinder(2.5);
        Cylinder cylinder3 = new Cylinder(3.5, 1.5);
        Cylinder cylinder4 = new Cylinder(3.5, 1.5, "green");

        System.out.println();
        System.out.println(cylinder1);
        System.out.println("Volume of cylinder1: " + cylinder1.getVolume());
        System.out.println(cylinder2);
        System.out.println("Volume of cylinder2: " + cylinder2.getVolume());
        System.out.println(cylinder3);
        System.out.println("Volume of cylinder3: " + cylinder3.getVolume());
        System.out.println(cylinder4);
        System.out.println("Volume of cylinder4: " + cylinder4.getVolume());
    }
}
