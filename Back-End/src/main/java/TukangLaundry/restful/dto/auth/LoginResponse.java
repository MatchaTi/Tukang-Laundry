package TukangLaundry.restful.dto.auth;

public class LoginResponse {
    private boolean status;
    private Integer id;
    private String nama;
    private String role;
    private String pesan;

    public LoginResponse() {
    }

    public LoginResponse(boolean status, Integer id, String nama, String role, String pesan) {
        this.status = status;
        this.id = id;
        this.nama = nama;
        this.role = role;
        this.pesan = pesan;
    }

    // Getter dan Setter
    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPesan() {
        return pesan;
    }

    public void setPesan(String pesan) {
        this.pesan = pesan;
    }
}
