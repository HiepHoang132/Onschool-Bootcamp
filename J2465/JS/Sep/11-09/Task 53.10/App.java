public class App {
    public static void main(String[] args) throws Exception {
        Person person1 = new Person();
        person1.setFirstName("Cao");
        person1.setLastName("Thanh Huyen");
        person1.setGender("Nu");

        Person person2 = new Person("Mai", "Chi Tho");
        person2.setEmail("email@abc.com");

        System.out.println(person1.toString());
        System.out.println(person2.toString());
    }
}
