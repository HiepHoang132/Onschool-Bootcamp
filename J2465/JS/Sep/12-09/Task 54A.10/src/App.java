public class App {
    public static void main(String[] args) throws Exception {

        Circle c1 = new Circle();
        Circle c2 = new Circle(3.0);
        System.out.println(c1.toString());
        System.out.println("Circumference circle 1: " + String.format("%.2f", c1.getCircumference()));
        System.out.println("Area circle 1: " + String.format("%.2f", c1.getArea()));

        System.out.println();
        System.out.println(c2.toString());
        System.out.println("Circumference circle 2: " + String.format("%.2f", c2.getCircumference()));
        System.out.println("Area circle 2: " + String.format("%.2f", c2.getArea()));
    }
}
