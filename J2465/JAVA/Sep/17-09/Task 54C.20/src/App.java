public class App {
    public static void main(String[] args) throws Exception {
        MovablePoint point1 = new MovablePoint(0, 0);
        MovablePoint point2 = new MovablePoint(5, 5);

        System.out.println("Initial position:");
        System.out.println(point1);
        System.out.println(point2);
        System.out.println();

        point1.moveUp();
        point1.moveRight();
        point2.moveDown();
        point2.moveLeft();

        System.out.println("After movement:");
        System.out.println(point1); // Expected: MovablePoint [x=1, y=1]
        System.out.println(point2); // Expected: MovablePoint [x=4, y=4] 
    }
}