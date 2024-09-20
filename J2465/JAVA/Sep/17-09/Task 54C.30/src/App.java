public class App {
    public static void main(String[] args) throws Exception {
        Rectangle rectangle = new Rectangle("blue", true, 4.0, 6.0);
        Circle circle = new Circle("green", false, 5.0);
        Square square = new Square(3.0, "yellow", true);

        System.out.println(rectangle);
        System.out.println();

        System.out.println("Rectangle Area: " + rectangle.getArea());
        System.out.println("Rectangle Perimeter: " + rectangle.getPerimeter());
        System.out.println();

        System.out.println(circle);
        System.out.println();

        System.out.println("Circle Area: " + circle.getArea());
        System.out.println("Circle Perimeter: " + circle.getPerimeter());
        System.out.println();

        System.out.println(square);
        System.out.println();
        
        System.out.println("Square Area: " + square.getArea());
        System.out.println("Square Perimeter: " + square.getPerimeter());
        System.out.println();
    }
}
