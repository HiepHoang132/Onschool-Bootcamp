import java.util.Stack;

public class Task13 {
    public static String run(String input) {
        Stack<Character> stack = new Stack<>();

        for (char ch : input.toCharArray()) {
            if (stack.isEmpty() || stack.peek() != ch) {
                stack.add(ch);
            } else {
                stack.pop();
            }
        }

        StringBuilder sb = new StringBuilder();
        for (char ch : stack) {
            sb.append(ch);
        }
        return sb.toString();
    }
}
