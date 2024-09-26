import java.text.DecimalFormat;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Vector;

class Point {
    private double x;
    private double y;

    Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() { return x; }

    public double getY() { return y; }

    public void setX(double x) { this.x = x; }

    public void setY(double y) { this.y = y; }

    public static double distance(Point p1, Point p2) {
        double distance = Math.sqrt(
            Math.pow(p2.getY() - p1.getY(), 2) +
            Math.pow(p2.getX() - p1.getX(), 2)
        );

        return distance;
    }
    
    public String toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}

class Line {
    private Point start = new Point(0, 0);
    private Point end = new Point(0, 0);

    Line(Point start, Point end) {
        this.start = start;
        this.end = end;
    }

    public Point getStart() { return start; }

    public Point getEnd() { return end; }

    public void setStart(Point start) { this.start = start; }

    public void setEnd(Point end) { this.end = end; }

    public double getLineLength() {
        return Point.distance(start, end);
    }
    
    public String toString() {
        return "Start: " + this.start + " End: " + this.end;
    }
}

interface ListOfLines {
	public Vector<Line> getLinesFromStartingPoint(Point p);
	public Line getLineWithMaxLength();
	public Vector<Line> list_of_lines = null;
}

class LineList implements ListOfLines {
    private Vector<Line> list_of_lines;
    
    public LineList(Vector<Line> list_of_lines){
        this.list_of_lines = list_of_lines;
    }
    
    @Override
    public Line getLineWithMaxLength(){
        if(list_of_lines == null || list_of_lines.isEmpty()) return null;
        
        Line longestLine = list_of_lines.get(0);
        double maxLength = longestLine.getLineLength();
        
        for(Line line : list_of_lines){
            if(line.getLineLength() > maxLength){
                maxLength = line.getLineLength();
                longestLine = line;
            }
        }
        
        return longestLine;
    }
    
    @Override
    public Vector<Line> getLinesFromStartingPoint(Point p){
        Vector<Line> result = new Vector<>();
        
        for(Line line: list_of_lines){
            if(line.getStart().getX() == p.getX() && line.getStart().getY() == p.getY()){
                result.add(line);
            }
        }
        
        return result;
    }
}

public class Solution3 {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        String[] input;
        Scanner sc = new Scanner(System.in);
        String sub = sc.nextLine();
        int nLines = Integer.parseInt(sub);
        Vector<Line> lines = new Vector<Line>();
        for(int i=0; i<nLines; i++) {
            input = sc.nextLine().split(" ");
            /* x1 y1 x2 y2 */
            double x1 = Double.parseDouble(input[0]);
            double y1 = Double.parseDouble(input[1]);
            double x2 = Double.parseDouble(input[2]);
            double y2 = Double.parseDouble(input[3]);
            
            Point p1 = new Point(x1, y1);
            Point p2 = new Point(x2, y2);
            Line line = new Line(p1, p2);
            lines.add(line);
        }

        /* Input to find all the line starting from point p1 */
        input = sc.nextLine().split(" ");
        double point_x1 = Double.parseDouble(input[0]);
        double point_y1 = Double.parseDouble(input[1]);
        Point startingPoint = new Point(point_x1, point_y1);

        /* Finding Longest Line*/
        LineList myList = new LineList(lines);
        Line maxLine = myList.getLineWithMaxLength();
        System.out.println("Longest Line --> " + maxLine);
        double length = maxLine.getLineLength();
        DecimalFormat df = new DecimalFormat("#.00");
        System.out.println("Length: " + (String)df.format(length));

        /* Finding all the lines starting from point startingPoint */
        Vector<Line> starting_lines = myList.getLinesFromStartingPoint(startingPoint);
        System.out.println("All the Lines starting from point: " + startingPoint);
        Iterator value = starting_lines.iterator(); 
        while(value.hasNext()) {
            System.out.println(value.next());
        }
    }
}

/**
    4
    3 8 13 14
    8 4 3 12
    -7 -4 17 6
    7 3 1 2
    8 4
    Longest Line --> Start: (-7.0, -4.0) End: (17.0, 6.0)
    Length: 26.00
    All the Lines starting from point: (8.0, 4.0)
    Start: (8.0, 4.0) End: (3.0, 12.0)

    5
    3 8 13 14
    8 4 3 12
    -7 -4 17 6
    8 4 9 4
    7 3 1 2
    8 4

    Longest Line --> Start: (-7.0, -4.0) End: (17.0, 6.0)
    Length: 26.00
    All the Lines starting from point: (8.0, 4.0)
    Start: (8.0, 4.0) End: (3.0, 12.0)
    Start: (8.0, 4.0) End: (9.0, 4.0)

    5
    23 15 -4 8
    7 3 2 1
    -5 4 13 8
    7 3 19 -12
    3 8 1 0
    7 3
    Longest Line --> Start: (23.0, 15.0) End: (-4.0, 8.0)
    Length: 27.89
    All the Lines starting from point: (7.0, 3.0)
    Start: (7.0, 3.0) End: (2.0, 1.0)
    Start: (7.0, 3.0) End: (19.0, -12.0)
 */