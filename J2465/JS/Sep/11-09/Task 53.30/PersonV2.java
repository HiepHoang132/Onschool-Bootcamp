import java.util.Arrays;

public class PersonV2 {
    String name;
    int age;
    double weight;
    long salary;
    String[] pets;

    public PersonV2() {
        this("HHH");
    }

    public PersonV2(String name) {
        this.name = name;
    }

    public PersonV2(String name, int age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    public PersonV2(String name, int age, double weight, long salary, String[] pets) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.salary = salary;
        this.pets = pets;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public long getSalary() {
        return salary;
    }

    public void setSalary(long salary) {
        this.salary = salary;
    }

    public String[] getPets() {
        return pets;
    }

    public void setPets(String[] pets) {
        this.pets = pets;
    }

    @Override
    public String toString() {
        return "PersonV2 [name=" + name + ", age=" + age + ", weight=" + weight + ", salary=" + salary + ", pets="
                + Arrays.toString(pets) + "]";
    }
}
