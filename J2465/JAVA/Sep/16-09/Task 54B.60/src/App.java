public class App {
    public static void main(String[] args) throws Exception {
        Animal animal1 = new Animal("Lion");
        Animal animal2 = new Animal("Elephant");
        System.out.println(animal1);
        System.out.println(animal2);
        System.out.println();

        Mammal mammal1 = new Mammal("Human");
        Mammal mammal2 = new Mammal("Whale");
        System.out.println(mammal1);
        System.out.println(mammal2);
        System.out.println();

        Cat cat1 = new Cat("Kitty");
        Cat cat2 = new Cat("Tom");
        System.out.println(cat1);
        System.out.println(cat2);
        System.out.println();

        cat1.greets();
        cat2.greets();
        System.out.println();

        Dog dog1 = new Dog("Buddy");
        Dog dog2 = new Dog("Max");
        System.out.println(dog1);
        System.out.println(dog2);
        System.out.println();

        dog1.greets();
        dog2.greets();
        System.out.println();

        dog1.greets(dog2);
    }
}
