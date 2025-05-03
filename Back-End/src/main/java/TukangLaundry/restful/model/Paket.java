package TukangLaundry.restful.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Entity 
@Table(name = "paket")
@Getter
@Setter
@AllArgsConstructor

public class Paket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nama;

    @Column(nullable = false)
    private Integer harga_per_kg;

    @Column(nullable = true)
    private String catatan;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    public enum Status {
        AKTIF,
        NONAKTIF,
    }

    public Paket() {
        this.status = Status.AKTIF;
    }

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

    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
        this.status = status;
    }



}
