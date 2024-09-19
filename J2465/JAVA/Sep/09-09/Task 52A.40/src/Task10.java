import java.util.List;

public class Task10 {
    public static List<Object> run(List<Object> list, int x, int y) {
        Object element = list.remove(x);
        list.add(y, element);

        return list;
    }

}
