package TukangLaundry.restful.dto.paket;

public class UpdatePaketRequest {
    private Integer id;
    private String nama;
    private Integer harga_per_kg;
    private String catatan;
    private String status;

    // Getter & Setter
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNama() {
        return nama;
    }
    public void setNama(String nama) {
        this.nama = nama;
    }

    public Integer getHarga_per_kg() {
        return harga_per_kg;
    }
    public void setHarga_per_kg(Integer harga_per_kg) {
        this.harga_per_kg = harga_per_kg;
    }

    public String getCatatan() {
        return catatan;
    }
    public void setCatatan(String catatan) {
        this.catatan = catatan;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}
