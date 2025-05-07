package TukangLaundry.restful.dto.pesanan;

public class CreatePesananRequest {
    private Integer kasirId;
    private String NamaPelanggan;
    private Integer beratKg;
    private Integer paketId;
    private String catatan;

    // Getters and Setters

    public Integer getKasirId() {
        return kasirId;
    }
    public void setKasirId(Integer kasirId) {
        this.kasirId = kasirId;
    }

    public String getNamaPelanggan() {
        return NamaPelanggan;
    }
    public void setNamaPelanggan(String namaPelanggan) {
        NamaPelanggan = namaPelanggan;
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
}
