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

import TukangLaundry.restful.model.Pesanan;

import TukangLaundry.restful.dto.pesanan.CreatePesananRequest;
import TukangLaundry.restful.dto.pesanan.CreatePesananResponse;
import TukangLaundry.restful.dto.pesanan.ViewPesananResponseAll;

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
    
}
