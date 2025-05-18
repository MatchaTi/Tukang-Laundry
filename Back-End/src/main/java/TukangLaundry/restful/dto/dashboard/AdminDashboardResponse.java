package TukangLaundry.restful.dto.dashboard;

public class AdminDashboardResponse {
    int jumlahKasir;
    int jumlahPaket;
    int jumlahPesanan;

    public AdminDashboardResponse() {
    }

    public AdminDashboardResponse(int jumlahKasir, int jumlahPaket, int jumlahPesanan) {
        this.jumlahKasir = jumlahKasir;
        this.jumlahPaket = jumlahPaket;
        this.jumlahPesanan = jumlahPesanan;
    }

    public int getJumlahKasir() {
        return jumlahKasir;
    }
    public void setJumlahKasir(int jumlahKasir) {
        this.jumlahKasir = jumlahKasir;
    }

    public int getJumlahPaket() {
        return jumlahPaket;
    }
    public void setJumlahPaket(int jumlahPaket) {
        this.jumlahPaket = jumlahPaket;
    }

    public int getJumlahPesanan() {
        return jumlahPesanan;
    }
    public void setJumlahPesanan(int jumlahPesanan) {
        this.jumlahPesanan = jumlahPesanan;
    }
}
