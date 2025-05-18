package TukangLaundry.restful.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TukangLaundry.restful.repository.KasirRepository;
import TukangLaundry.restful.repository.PaketRepository;
import TukangLaundry.restful.service.DashboardService;

@RestController
@RequestMapping("api/v1")
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @Autowired
    private PaketRepository paketRepo;

    @Autowired
    private KasirRepository kasirRepo;


    @GetMapping("/dashboard/admin")
    public ResponseEntity<?> getAdminDashboard() {
        try {
            return ResponseEntity.ok(dashboardService.displayInfo(paketRepo, kasirRepo));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data dashboard admin");
        }
    }
    
    @GetMapping("/dashboard/kasir")
    public ResponseEntity<?> getKasirDashboard() {
        try {
            return ResponseEntity.ok(dashboardService.displayInfo());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Gagal mendapatkan data dashboard kasir");
        }
    }
    
}
