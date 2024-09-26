import java.util.Scanner;

abstract class Calculator {
    abstract int add(int a, int b);
}

/*
 * Write the implementations of Adder and Multiplier classes.
 */
class Adder extends Calculator{
    @Override
    public int add(int a, int b){
        System.out.println(String.format("Adding integers: %d %d", a, b));
        return a + b;
    }
}

class Multiplier{
    public int multiply(int a, int b, Calculator calculator){
        int result = a;
        for(int i = 0; i < b - 1; i++){
            result = calculator.add(result, a);
        }
        return result;
    }
}


public class Solution2 {
    private static final Scanner INPUT_READER = new Scanner(System.in);
    private static final Calculator CALCULATOR = new Adder();
    
    private static void testAddition(int a, int b) {
        System.out.println("Sum = " + CALCULATOR.add(a, b));
    }
    
    private static void testMultiplication(int a, int b) {
        System.out.println("Product = " + new Multiplier().multiply(a, b, CALCULATOR));
    }
    
    public static void main(String[] args) {
        int a = Integer.parseInt(INPUT_READER.nextLine());
        int b = Integer.parseInt(INPUT_READER.nextLine());
        
        System.out.println("Testing Addition");
        testAddition(a, b);
        
        System.out.println("\nTesting Multiplication");
        testMultiplication(a, b);
    }
}

// input two integers shift enter