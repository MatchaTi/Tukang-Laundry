package TukangLaundry.restful.controller;

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

import TukangLaundry.restful.dto.paket.CreatePaketRequest;
import TukangLaundry.restful.dto.paket.CreatePaketResponse;
import TukangLaundry.restful.dto.paket.UpdatePaketRequest;
import TukangLaundry.restful.model.Paket;
import TukangLaundry.restful.service.PaketService;

@RestController
@RequestMapping("api/v1/paket")
public class PaketController {

    @Autowired
    private PaketService paketService;

    @PostMapping
    public ResponseEntity<?> addPaket(@RequestBody CreatePaketRequest paketRequest) {
        try {
            
            Paket paket = new Paket();
            paket.setNama(paketRequest.getNama());
            paket.setHarga_per_kg(paketRequest.getHarga_per_kg());
            paket.setCatatan(paketRequest.getCatatan());

            paketService.addPaket(paket);

            return ResponseEntity.ok(new CreatePaketResponse(true, "Paket Layanan Berhasil Ditambahkan"));
        } catch (Exception e) {

            return ResponseEntity.status(500).body(new CreatePaketResponse(false, "Paket Layanan Gagal Ditambahkan"));
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllPaket() {
        try {
            return ResponseEntity.ok(paketService.getAllPaket());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data paket");
        }
    }

    @GetMapping("/active")
    public ResponseEntity<?> getAllPaketActive() {
        try {
            return ResponseEntity.ok(paketService.getAllPaketActive());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data paket aktif");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPaketById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(paketService.getPaketById(id));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data paket (Id: " + id + ")");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePaketById(@PathVariable Integer id, @RequestBody UpdatePaketRequest paketRequest) {
        try {
            paketRequest.setId(id);
            CreatePaketResponse response = paketService.updatePaketById(paketRequest);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Paket Layanan Gagal Diupdate");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePaketById(@PathVariable Integer id) {
        try {
            CreatePaketResponse response = paketService.deletePaketbyId(id);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Paket Layanan Gagal Dihapus");
        }
    }
}