import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
class Transaction {
   LocalDate date;
   double amount;
   Transaction(LocalDate date, double amount) {
       this.date = date;
       this.amount = amount;
   }
}
public class RealWorldExample2 {
   public static void main(String[] args) {
       List<Transaction> transactions = Arrays.asList(
           new Transaction(LocalDate.of(2023, 1, 10), 1500),
           new Transaction(LocalDate.of(2023, 1, 15), 2000),
           new Transaction(LocalDate.of(2023, 2, 5), 3000),
           new Transaction(LocalDate.of(2023, 2, 20), 4000),
           new Transaction(LocalDate.of(2023, 3, 8), 5000)
       );
       // Nhóm các giao dịch theo tháng và tính tổng số tiền giao dịch mỗi tháng
       Map<Integer, Double> transactionsByMonth = transactions.stream()
                                                              .collect(Collectors.groupingBy(
                                                                  t -> t.date.getMonthValue(),
                                                                  Collectors.summingDouble(t -> t.amount)
                                                              ));
       transactionsByMonth.forEach((month, totalAmount) -> {
           System.out.println("Tháng " + month + ": Tổng số tiền giao dịch = " + totalAmount);
       });
   }
}


