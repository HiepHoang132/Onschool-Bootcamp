public class App {
    public static void main(String[] args) throws Exception {
        MovablePoint point = new MovablePoint(5, 10, 2, 3);
        System.out.println("Initial MovablePoint: " + point);
        System.out.println();

        point.moveUp();
        System.out.println("After moving up: " + point);
        point.moveDown();
        System.out.println("After moving down: " + point);
        point.moveLeft();
        System.out.println("After moving left: " + point);
        point.moveRight();
        System.out.println("After moving right: " + point);
        System.out.println();

        MovableCircle circle = new MovableCircle(2, 3, 1, 1, 5);
        System.out.println("Initial MovableCircle: " + circle);
        System.out.println();

        circle.moveUp();
        System.out.println("After moving up: " + circle);
        circle.moveDown();
        System.out.println("After moving down: " + circle);
        circle.moveLeft();
        System.out.println("After moving left: " + circle);
        circle.moveRight();
        System.out.println("After moving right: " + circle);
    }
}
