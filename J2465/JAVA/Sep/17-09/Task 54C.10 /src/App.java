public class App {
    public static void main(String[] args) throws Exception {
        Rectangle rectangle1 = new Rectangle("Red", 5, 10);
        Rectangle rectangle2 = new Rectangle("Blue", 3, 4);

        System.out.println(rectangle1);
        System.out.println(rectangle2);
        System.out.println();

        System.out.println("Area of Rectangle 1: " + rectangle1.getArea());
        System.out.println("Area of Rectangle 2: " + rectangle2.getArea());
        System.out.println();

        Triangle triangle1 = new Triangle("Green", 4, 6);
        Triangle triangle2 = new Triangle("Yellow", 5, 3);

        System.out.println(triangle1);
        System.out.println(triangle2);
        System.out.println();

        System.out.println("Area of Triangle 1: " + triangle1.getArea());
        System.out.println("Area of Triangle 2: " + triangle2.getArea());

    }
}
