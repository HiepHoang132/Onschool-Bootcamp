import java.util.ArrayList;
import java.util.List;

public class CollectionExample {
   public static void main(String[] args) {
       // Tạo một danh sách các số nguyên
       List<Integer> numbers = new ArrayList<>();
       numbers.add(1);
       numbers.add(2);
       numbers.add(3);
       numbers.add(4);
       numbers.add(5);
       numbers.add(6);

       // Duyệt qua danh sách và in ra các số chẵn
       for (Integer number : numbers) {
           if (number % 2 == 0) {
               System.out.println("Số chẵn: " + number);
           }
       }
   }
}
