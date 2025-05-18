package TukangLaundry.restful.dto.dashboard;

public class KasirDashboardResponse {
    int jumlahPesanan;

    public KasirDashboardResponse() {
    }

    public KasirDashboardResponse(int jumlahPesanan) {
        this.jumlahPesanan = jumlahPesanan;
    }

    public int getJumlahPesanan() {
        return jumlahPesanan;
    }
    public void setJumlahPesanan(int jumlahPesanan) {
        this.jumlahPesanan = jumlahPesanan;
    }
    

}
