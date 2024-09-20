public class App {
    public static void main(String[] args) throws Exception {
        Circle circle = new Circle(5.0); 

        ResizableCircle resizableCircle = new ResizableCircle(10.0); 

        System.out.println(circle); 
        System.out.println();

        System.out.println(resizableCircle); 
        System.out.println();

        System.out.println("Circle Perimeter: " + circle.getPerimeter());
        System.out.println("Circle Area: " + circle.getArea());
        System.out.println();

        System.out.println("ResizableCircle Perimeter: " + resizableCircle.getPerimeter());
        System.out.println("ResizableCircle Area: " + resizableCircle.getArea());
        System.out.println();

        resizableCircle.resize(50);

        System.out.println("After resizing ResizableCircle by 50%");
        System.out.println("ResizableCircle Perimeter: " + resizableCircle.getPerimeter());
        System.out.println("ResizableCircle Area: " + resizableCircle.getArea());
    }
}
