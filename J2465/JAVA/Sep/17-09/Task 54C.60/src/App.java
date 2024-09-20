public class App {
    public static void main(String[] args) throws Exception {
        // Create instances of Cat, Dog, and BigDog
        Cat cat = new Cat("Whiskers");
        Dog dog = new Dog("Buddy");
        BigDog bigDog = new BigDog("Maximus");

        cat.greets(); // Output: Meow
        dog.greets(); // Output: Woof
        bigDog.greets(); // Output: Wooow

        dog.greets(dog); // Output: Woooof
        bigDog.greets(dog); // Output: Woooooow
        bigDog.greets(bigDog); // Output: Wooooooooow
    }
}
