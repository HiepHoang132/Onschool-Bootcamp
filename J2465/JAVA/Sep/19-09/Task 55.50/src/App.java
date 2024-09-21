import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Country> countries = new ArrayList<>();

        Country vietnam = new Country("VN", "Việt Nam");
        vietnam.addRegion(new Region("SG", "TP. Hồ Chí Minh"));
        vietnam.addRegion(new Region("HN", "Hà Nội"));
        vietnam.addRegion(new Region("DN", "Đà Nẵng"));
        countries.add(vietnam);

        countries.add(new Country("US", "Hoa Kỳ"));
        countries.add(new Country("JP", "Nhật Bản"));

        for (Country country : countries) {
            // Nếu là Việt Nam, in ra danh sách các vùng
            if (country.getCountryCode() == "VN") {
                System.out.println("Danh sách các vùng:");
                for (Region region : country.getRegions()) {
                    System.out.println(" - " + region);
                }
            }
        }
    }
}
