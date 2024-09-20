public class App {
    public static void main(String[] args) throws Exception {
        Circle circle = new Circle(5.0); 
        Rectangle rectangle = new Rectangle(4.0, 6.0); 

        System.out.println(circle);
        System.out.println();

        System.out.println("Circle Area: " + circle.getArea());
        System.out.println("Circle Perimeter: " + circle.getPerimeter());
        System.out.println();

        System.out.println(rectangle);
        System.out.println();
        
        System.out.println("Rectangle Area: " + rectangle.getArea());
        System.out.println("Rectangle Perimeter: " + rectangle.getPerimeter());
    }
}
