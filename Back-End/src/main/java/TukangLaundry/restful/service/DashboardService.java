package TukangLaundry.restful.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.dto.dashboard.AdminDashboardResponse;
import TukangLaundry.restful.dto.dashboard.KasirDashboardResponse;
import TukangLaundry.restful.repository.KasirRepository;
import TukangLaundry.restful.repository.PaketRepository;
import TukangLaundry.restful.repository.PesananRepository;


@Service
public class DashboardService {

    @Autowired
    private PesananRepository pesananRepo;

    @Autowired
    public AdminDashboardResponse displayInfo(PaketRepository paketRepo, KasirRepository kasirRepo) {
        AdminDashboardResponse response = new AdminDashboardResponse();
        response.setJumlahPaket(paketRepo.countActivePaket());
        response.setJumlahKasir(kasirRepo.countActiveKasir());
        response.setJumlahPesanan(pesananRepo.countPesanan());
        return response;
    }

    public KasirDashboardResponse displayInfo() {
        KasirDashboardResponse response = new KasirDashboardResponse();
        response.setJumlahPesanan(pesananRepo.countPesanan());
        return response;
    }

}
