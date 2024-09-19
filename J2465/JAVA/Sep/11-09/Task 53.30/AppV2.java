import java.util.ArrayList;

public class AppV2 {
    public static void main(String[] args) throws Exception {
        ArrayList<PersonV2> persons = new ArrayList<>();

        PersonV2 p1 = new PersonV2();
        PersonV2 p2 = new PersonV2("David");
        PersonV2 p3 = new PersonV2("Beckham", 40, 82.5);
        String[] pets = new String[] { "cat", "dog" };
        PersonV2 p4 = new PersonV2("John", 60, 71, 3000000, pets);
        persons.add(p1);
        persons.add(p2);
        persons.add(p3);
        persons.add(p4);

        for (PersonV2 person : persons) {
            System.out.println(person.toString());
        }
    }
}
