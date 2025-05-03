package TukangLaundry.restful.dto.paket;

public class CreatePaketResponse {
    private boolean status;
    private String pesan;

    public CreatePaketResponse(boolean status, String pesan) {
        this.status = status;
        this.pesan = pesan;
    }

    // Getters and Setters
    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getPesan() {
        return pesan;
    }
    public void setPesan(String pesan) {
        this.pesan = pesan;
    }
}
