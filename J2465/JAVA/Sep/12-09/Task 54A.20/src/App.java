public class App {
    public static void main(String[] args) throws Exception {
        Rectangle r1 = new Rectangle();
        Rectangle r2 = new Rectangle(2.0f, 3.0f);

        System.out.println(r1);
        System.out.println("Area rectangle 1: " + r1.getArea());
        System.out.println("Perimeter rectangle 1: " + r1.getPerimeter());

        System.out.println();
        System.out.println(r2);
        System.out.println("Area rectangle 2: " + r2.getArea());
        System.out.println("Perimeter rectangle 2: " + r2.getPerimeter());
    }
}
