package TukangLaundry.restful.controller;

import org.springframework.web.bind.annotation.RestController;

import TukangLaundry.restful.dto.kasir.CreateKasirRequest;
import TukangLaundry.restful.dto.kasir.CreateKasirResponse;
import TukangLaundry.restful.dto.kasir.UpdateKasirRequest;
import TukangLaundry.restful.model.Kasir;
import TukangLaundry.restful.model.User;
import TukangLaundry.restful.service.KasirService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("api/v1/kasir")
public class KasirController {

    @Autowired
    private KasirService kasirService;

    // Tambah data kasir
    @PostMapping
    public ResponseEntity<?> addKasir(@RequestBody CreateKasirRequest kasirRequest) {
        try {

            // Polimorfisme
            User kasir = new Kasir();
            kasir.setName(kasirRequest.getName());
            kasir.setEmail(kasirRequest.getEmail());
            kasir.setPassword(kasirRequest.getPassword());
            kasirService.addKasir((Kasir) kasir);

            return ResponseEntity.ok(new CreateKasirResponse(true, "Kasir Berhasil Ditambahkan"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new CreateKasirResponse(false, e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllKasir() {
        try {
            return ResponseEntity.ok(kasirService.getAllKasir());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data kasir");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getKasirById(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(kasirService.getKasirById(id));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data kasir dengan ID: " + id);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateKasir(@PathVariable Integer id, @RequestBody UpdateKasirRequest request) {
        try {
            request.setId(id);
            CreateKasirResponse response = kasirService.updateKasirById(request);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new CreateKasirResponse(false, "Gagal memperbarui data kasir"));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteKasir(@PathVariable Integer id) {
        try {
            CreateKasirResponse response = kasirService.deleteKasirById(id);
            if (response.isStatus()) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new CreateKasirResponse(false, "Gagal menghapus data kasir"));
        }
    }
}
