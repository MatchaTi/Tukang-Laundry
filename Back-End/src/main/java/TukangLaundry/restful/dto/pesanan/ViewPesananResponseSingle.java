package TukangLaundry.restful.dto.pesanan;

public class ViewPesananResponseSingle {
    private Integer id;
    private String namaKasir;
    private String namaPelanggan;
    private String namaPaket;
    private Number hargaPaket;
    private Integer beratKg;
    private String catatan;
    private String status;
    private String tanggalPesan;
    private String tanggalSelesai;

    public ViewPesananResponseSingle() {
    }

    public ViewPesananResponseSingle(Integer id, String namaKasir, String namaPelanggan, String namaPaket,
            Number hargaPaket, Integer beratKg, String status, String catatan, String tanggalPesan,
            String tanggalSelesai) {
        this.id = id;
        this.namaKasir = namaKasir;
        this.namaPelanggan = namaPelanggan;
        this.namaPaket = namaPaket;
        this.hargaPaket = hargaPaket;
        this.beratKg = beratKg;
        this.status = status;
        this.catatan = catatan;
        this.tanggalPesan = tanggalPesan;
        this.tanggalSelesai = tanggalSelesai;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamaKasir() {
        return namaKasir;
    }

    public void setNamaKasir(String namaKasir) {
        this.namaKasir = namaKasir;
    }

    public String getNamaPelanggan() {
        return namaPelanggan;
    }

    public void setNamaPelanggan(String namaPelanggan) {
        this.namaPelanggan = namaPelanggan;
    }

    public String getNamaPaket() {
        return namaPaket;
    }

    public void setNamaPaket(String namaPaket) {
        this.namaPaket = namaPaket;
    }

    public void setHargaPaket(Number hargaPaket) {
        this.hargaPaket = hargaPaket;
    }

    public Number getHargaPaket() {
        return hargaPaket;
    }

    public Integer getBeratKg() {
        return beratKg;
    }

    public void setBeratKg(Integer beratKg) {
        this.beratKg = beratKg;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCatatan() {
        return catatan;
    }

    public void setCatatan(String catatan) {
        this.catatan = catatan;
    }

    public String getTanggalPesan() {
        return tanggalPesan;
    }

    public void setTanggalPesan(String tanggalPesan) {
        this.tanggalPesan = tanggalPesan;
    }

    public String getTanggalSelesai() {
        return tanggalSelesai;
    }

    public void setTanggalSelesai(String tanggalSelesai) {
        this.tanggalSelesai = tanggalSelesai;
    }
}