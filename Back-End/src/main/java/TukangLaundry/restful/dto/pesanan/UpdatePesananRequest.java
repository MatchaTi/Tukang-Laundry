package TukangLaundry.restful.dto.pesanan;

public class UpdatePesananRequest {
    private Integer id;
    private Integer kasirId;
    private String namaPelanggan;
    private Integer beratKg;
    private Integer paketId;
    private String catatan;
    private String status;

    // Getter & Setter
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getKasirId() {
        return kasirId;
    }
    public void setKasirId(Integer kasirId) {
        this.kasirId = kasirId;
    }

    public String getNamaPelanggan() {
        return namaPelanggan;
    }
    public void setNamaPelanggan(String namaPelanggan) {
        this.namaPelanggan = namaPelanggan;
    }

    public Integer getBeratKg() {
        return beratKg;
    }
    public void setBeratKg(Integer beratKg) {
        this.beratKg = beratKg;
    }

    public Integer getPaketId() {
        return paketId;
    }
    public void setPaketId(Integer paketId) {
        this.paketId = paketId;
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
