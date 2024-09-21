import java.util.ArrayList;

public class Country {
    private String countryCode;
    private String countryName;
    private ArrayList<Region> regions;

    public Country(String countryCode, String countryName) {
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.regions = new ArrayList<>();
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public ArrayList<Region> getRegions() {
        return regions;
    }

    public void addRegion(Region region) {
        regions.add(region);
    }

    @Override
    public String toString() {
        return countryName + " (" + countryCode + ")";
    }

}
