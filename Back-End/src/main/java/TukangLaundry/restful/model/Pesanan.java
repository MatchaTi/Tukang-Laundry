package TukangLaundry.restful.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pesanan")
@NoArgsConstructor
@AllArgsConstructor
public class Pesanan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer kasirId;

    @Column(nullable = false)
    private Integer paketId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    public enum Status {
        DIPROSES,
        SELESAI,
    }

    @Column(nullable = true)
    private String catatan;

    @Column(nullable = false)
    private Integer beratKg;

    @Column(nullable = false)
    private String namaPelanggan;

    @Column(nullable = false)
    private LocalDateTime tanggalPesan;

    @Column(nullable = true)
    private LocalDateTime tanggalSelesai;

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

    public Integer getPaketId() {
        return paketId;
    }
    public void setPaketId(Integer paketId) {
        this.paketId = paketId;
    }

    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
        this.status = status;
    }

    public String getCatatan() {
        return catatan;
    }
    public void setCatatan(String catatan) {
        this.catatan = catatan;
    }

    public Integer getBeratKg() {
        return beratKg;
    }
    public void setBeratKg(Integer beratKg) {
        this.beratKg = beratKg;
    }

    public String getNamaPelanggan() {
        return namaPelanggan;
    }
    public void setNamaPelanggan(String namaPelanggan) {
        this.namaPelanggan = namaPelanggan;
    }

    public LocalDateTime getTanggalPesan() {
        return tanggalPesan;
    }
    public void setTanggalPesan(LocalDateTime tanggalPesan) {
        this.tanggalPesan = tanggalPesan;
    }

    public LocalDateTime getTanggalSelesai() {
        return tanggalSelesai;
    }
    public void setTanggalSelesai(LocalDateTime tanggalSelesai) {
        this.tanggalSelesai = tanggalSelesai;
    }
}
