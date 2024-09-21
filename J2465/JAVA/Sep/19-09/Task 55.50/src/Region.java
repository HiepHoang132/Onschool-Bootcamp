public class Region {
    private String regionCode;
    private String regionName;

    public Region(String regionCode, String regionName) {
        this.regionCode = regionCode;
        this.regionName = regionName;
    }

    @Override
    public String toString() {
        return regionName + " (" + regionCode + ")";
    }
}
