import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

interface IAnimal {
    void setId(int id);
    int getId();
    void setSpecies(String species);
    String getSpecies();
    void setName(String name);
    String getName();
    void setAge(int age);
    int getAge();
}

interface IZoo {
    void addAnimal(IAnimal animal);
    void removeAnimal(int id);
    int countAnimals();
    List<IAnimal> getAnimalsBySpecies(String species);
    List<Map.Entry<Integer, List<IAnimal>>> getAnimalsByAge();
}
class Animal implements IAnimal {
    private int id;
    private String species;
    private String name;
    private int age;
    
    public Animal(){
        
    }
    
    @Override
    public int getId(){
        return id;
    }
    
    @Override
    public void setId(int id){
        this.id = id;
    }
    
    @Override
    public String getSpecies(){
        return species;
    }
    
    @Override
    public void setSpecies(String species){
        this.species = species;
    }
    
    @Override
    public String getName(){
        return name;
    }
    
    @Override
    public void setName(String name){
        this.name = name;
    }
    
    @Override
    public int getAge(){
        return age;
    }
    
    @Override
    public void setAge(int age){
        this.age = age;
    }
}

class Zoo implements IZoo {
    private List<IAnimal> animals;
    
    public Zoo(){
        this.animals = new ArrayList<>();
    }
    
    @Override
    public void addAnimal(IAnimal animal){
        this.animals.add(animal);
    }
    
    @Override
    public void removeAnimal(int id){
        for(IAnimal animal : animals){
            if(animal.getId() == id){
                animals.remove(animal);
                return;
            }
        }
    }
    
    @Override
    public int countAnimals(){
        return animals.size();
    }
    
    @Override
    public List<IAnimal> getAnimalsBySpecies(String species){
        List<IAnimal> result = new ArrayList<>();
        for(IAnimal animal: animals){
            if(animal.getSpecies().equals(species)){
                result.add(animal);
            }
        }
        return result;
    }
    
    @Override
    public List<Map.Entry<Integer, List<IAnimal>>> getAnimalsByAge(){
        Map<Integer, List<IAnimal>> result = new HashMap<>();
        for(IAnimal animal: animals){
            int age = animal.getAge();
            if(!result.containsKey(age)){
                result.put(age, new ArrayList<IAnimal>());
            }
            result.get(age).add(animal);
        }
        return result.entrySet().stream().sorted((e1, e2) -> e2.getKey().compareTo(e1.getKey())).collect(Collectors.toList());
    }
}
public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);

        IZoo zoo = new Zoo();
        int aCount = Integer.parseInt(br.readLine().trim());
        for (int i = 1; i <= aCount; i++) {
            String[] a = br.readLine().trim().split(" ");
            IAnimal e = new Animal();
            e.setId(Integer.parseInt(a[0]));
            e.setSpecies(a[1]);
            e.setName(a[2]);
            e.setAge(Integer.parseInt(a[3]));
            zoo.addAnimal(e);
        }

        out.println("There are " + zoo.countAnimals() + " animals in the zoo");
        String[] b = br.readLine().trim().split(" ");
        String species = b[0];
        List<IAnimal> specAnimals = zoo.getAnimalsBySpecies(species);
        out.println(species + ":");
        for (IAnimal sp : specAnimals) {
            out.println("" + sp.getName() + " (" + sp.getAge() + " years old)");
        }
        List<Map.Entry<Integer, List<IAnimal>>> animalsByAge = zoo.getAnimalsByAge();
        out.println("Animals by age:");
        for (Map.Entry<Integer, List<IAnimal>> groups : animalsByAge) {
            out.println("" + groups.getKey() + " year(s) old:");
            for (IAnimal animal : groups.getValue()) {
                out.println("- " + animal.getName() + " (" + animal.getSpecies() + ")");
            }
        }
        String[] c = br.readLine().trim().split(" ");
        int id = Integer.parseInt(c[0]);
        zoo.removeAnimal(id);
        out.println("There are now " + zoo.countAnimals() + " animals in the zoo");

        out.flush();
        out.close();
    }
}

/*
 *  4
    1 Spec-1 Animal-0 8
    2 Spec-2 Animal-1 4
    3 Spec-1 Animal-2 9
    4 Spec-3 Animal-3 11
    Spec-2
    2
 */

 /**
  * 
    There are 4 animals in the zoo
    Spec-2:
    Animal-1 (4 years old)
    Animals by age:
    11 year(s) old:
    - Animal-3 (Spec-3)
    9 year(s) old:
    - Animal-2 (Spec-1)
    8 year(s) old:
    - Animal-0 (Spec-1)
    4 year(s) old:
    - Animal-1 (Spec-2)
    There are now 3 animals in the zoo
  */