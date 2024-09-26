import java.util.Scanner;

class Comparator{
    public boolean compare(int a, int b){
        return a == b;
    }
    
    public boolean compare(String a, String b){
        return a.equals(b);
    }
    
    public boolean compare(int[] a, int[] b){
        if(a.length != b.length) return false;
        
        int size = Math.min(a.length, b.length);
            
        for(int i = 0; i < size; i++){
            if(a[i] != b[i]) return false;  
        }
        
        return true;
    }
}

class Solution1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Comparator comp = new Comparator();
        
        int testCases = Integer.parseInt(scan.nextLine());
        while(testCases-- > 0){
            int condition = Integer.parseInt(scan.nextLine());
            switch(condition){
                case 1:
                    String s1=scan.nextLine().trim();
                    String s2=scan.nextLine().trim();
                    
                    System.out.println( (comp.compare(s1,s2)) ? "Same" : "Different" );
                    break;
                case 2:
                    int num1 = scan.nextInt();
                    int num2 = scan.nextInt();
                    
                    System.out.println( (comp.compare(num1,num2)) ? "Same" : "Different");
                    if(scan.hasNext()){ // avoid exception if this last test case
                        scan.nextLine(); // eat space until next line
                    }
                    break;
                case 3:
                    // create and fill arrays
                    int[] array1 = new int[scan.nextInt()];
                    int[] array2 = new int[scan.nextInt()];
                    for(int i = 0; i < array1.length; i++){
                        array1[i] = scan.nextInt();
                    }
                    for(int i = 0; i < array2.length; i++){
                        array2[i] = scan.nextInt();
                    }
                    
                    System.out.println( comp.compare(array1, array2) ? "Same" : "Different");
                    if(scan.hasNext()){ // avoid exception if this last test case
                        scan.nextLine(); // eat space until next line
                    }
                    break;
                default:
                    System.err.println("Invalid input.");
            }// end switch
        }// end while
        scan.close();
    }
}

/**
 *  3
    1
    hello world
    hello world
    2
    3
    4
    3
    3 3
    1 2 3
    1 2 3
    Same
    Different
    Same

    2
    3
    3 4
    1 2 3
    1 2 3 4
    1
    MeowMeow
    meowMeow
    Different
    Different


    3
    1
    hello world
    hello world
    2
    4
    4
    3
    3 5
    102 342 123
    45 67 43 102 342
    Same
    Same
    Different

    3
    3
    3 3
    3 4 5
    3 4 5
    1
    Object Oriented programming Languages
    Object OrientEd programming Languages
    2
    67676
    67676
    Same
    Different
    Same
 */