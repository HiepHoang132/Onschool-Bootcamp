package com.example.demo.DTO;

public class DistrictDTO {
    private final long id;
    private final String name;
    private final String prefix;
    private final long provinceId;
    private final String provinceName;

    private DistrictDTO(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.prefix = builder.prefix;
        this.provinceId = builder.provinceId;
        this.provinceName = builder.provinceName;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private long id;
        private String name;
        private String prefix;
        private long provinceId;
        private String provinceName;

        public Builder id(long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder prefix(String prefix) {
            this.prefix = prefix;
            return this;
        }

        public Builder provinceId(long provinceId) {
            this.provinceId = provinceId;
            return this;
        }

        public Builder provinceName(String provinceName) {
            this.provinceName = provinceName;
            return this;
        }

        public DistrictDTO build() {
            return new DistrictDTO(this);
        }
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPrefix() {
        return prefix;
    }

    public long getProvinceId() {
        return provinceId;
    }

    public String getProvinceName() {
        return provinceName;
    }

}
