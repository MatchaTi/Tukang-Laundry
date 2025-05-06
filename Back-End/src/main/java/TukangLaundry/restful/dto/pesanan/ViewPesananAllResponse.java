package TukangLaundry.restful.dto.pesanan;

public class ViewPesananAllResponse {
    private Integer id;
    private String namaPelanggan;
    private String namaKasir;
    private String namaPaket;
    private Integer beratKg;
    private String status;
    private String tanggalPesan;
    private String tanggalSelesai;

    public ViewPesananAllResponse() {
    }

    public ViewPesananAllResponse(Integer id, String namaPelanggan, String namaKasir, String namaPaket, Integer beratKg, String status, String tanggalPesan, String tanggalSelesai) {
        this.id = id;
        this.namaPelanggan = namaPelanggan;
        this.namaKasir = namaKasir;
        this.namaPaket = namaPaket;
        this.beratKg = beratKg;
        this.status = status;
        this.tanggalPesan = tanggalPesan;
        this.tanggalSelesai = tanggalSelesai;
    }

    // Getters and Setters

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamaPelanggan() {
        return namaPelanggan;
    }
    public void setNamaPelanggan(String namaPelanggan) {
        this.namaPelanggan = namaPelanggan;
    }

    public String getNamaKasir() {
        return namaKasir;
    }
    public void setNamaKasir(String namaKasir) {
        this.namaKasir = namaKasir;
    }

    public String getNamaPaket() {
        return namaPaket;
    }
    public void setNamaPaket(String namaPaket) {
        this.namaPaket = namaPaket;
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
