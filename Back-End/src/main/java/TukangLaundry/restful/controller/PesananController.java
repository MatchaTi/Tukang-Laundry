package TukangLaundry.restful.controller;

// Keep Import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TukangLaundry.restful.dto.pesanan.CreatePesananRequest;
import TukangLaundry.restful.dto.pesanan.CreatePesananResponse;
import TukangLaundry.restful.dto.pesanan.UpdatePesananRequest;
import TukangLaundry.restful.service.PesananService;

@RestController
@RequestMapping("api/v1/pesanan")
public class PesananController {

    @Autowired
    private PesananService pesananService;

    @PostMapping
    public ResponseEntity<?> addPesanan(@RequestBody CreatePesananRequest pesananRequest) {
        try {
            return ResponseEntity.ok(pesananService.addPesanan(pesananRequest));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new CreatePesananResponse(false, "Pesanan gagal ditambahkan: " + e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllPesanan() {
        try {
            return ResponseEntity.ok(pesananService.getAllPesanan());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data pesanan");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPesananById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(pesananService.getPesananById(id));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data pesanan dengan ID: " + id);
        }
    }

    @GetMapping("/riwayat")
    public ResponseEntity<?> getRiwayatPesanan() {
        try {
            return ResponseEntity.ok(pesananService.getRiwayatPesanan());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data riwayat pesanan");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePesananById(@PathVariable Integer id, @RequestBody UpdatePesananRequest pesananRequest) {
        try {
            pesananRequest.setId(id);
            CreatePesananResponse response = pesananService.updatePesananById(pesananRequest);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal memperbarui data pesanan dengan ID: " + id + " - " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePesananById(@PathVariable Integer id) {
        try {
            CreatePesananResponse response = pesananService.deletePesananById(id);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal menghapus data pesanan dengan ID: " + id + " - " + e.getMessage());
        }
    }
}
