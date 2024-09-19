public class App {
    public static void main(String[] args) throws Exception {
        Shape shape1 = new Shape();
        Shape shape2 = new Shape("green", false);
        System.out.println(shape1);
        System.out.println(shape2);
        System.out.println();

        Circle circle1 = new Circle();
        Circle circle2 = new Circle(2.0);
        Circle circle3 = new Circle("green", true, 3.0);
        System.out.println(circle1);
        System.out.println(circle2);
        System.out.println(circle3);
        System.out.println();

        System.out.println("Area Circle 1: " + circle1.getArea() + ", Perimeter: " + circle1.Perimeter());
        System.out.println("Area Circle 2: " + circle2.getArea() + ", Perimeter: " + circle2.Perimeter());
        System.out.println("Area Circle 3: " + circle3.getArea() + ", Perimeter: " + circle3.Perimeter());
        System.out.println();

        Rectangle rectangle1 = new Rectangle();
        Rectangle rectangle2 = new Rectangle(2.5, 1.5);
        Rectangle rectangle3 = new Rectangle("green", true, 2.0, 1.5);
        System.out.println(rectangle1);
        System.out.println(rectangle2);
        System.out.println(rectangle3);
        System.out.println();

        System.out.println("Area Rectangle 1: " + rectangle1.getArea() + ", Perimeter: " + rectangle1.getPerimeter());
        System.out.println("Area Rectangle 2: " + rectangle2.getArea() + ", Perimeter: " + rectangle2.getPerimeter());
        System.out.println("Area Rectangle 3: " + rectangle3.getArea() + ", Perimeter: " + rectangle3.getPerimeter());
        System.out.println();

        Square square1 = new Square();
        Square square2 = new Square(1.5);
        Square square3 = new Square(2.0, "green", true);
        System.out.println(square1);
        System.out.println(square2);
        System.out.println(square3);

        System.out.println("Area Square 1: " + square1.getArea() + ", Perimeter: " + square1.getPerimeter());
        System.out.println("Area Square 2: " + square2.getArea() + ", Perimeter: " + square2.getPerimeter());
        System.out.println("Area Square 3: " + square3.getArea() + ", Perimeter: " + square3.getPerimeter());
    }
}
