package TukangLaundry.restful.service;

// Keep the unused imports to avoid confusion
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.model.Pesanan;
import TukangLaundry.restful.repository.PesananRepository;
import TukangLaundry.restful.dto.pesanan.CreatePesananResponse;
import TukangLaundry.restful.dto.pesanan.CreatePesananRequest;
import TukangLaundry.restful.dto.pesanan.ViewPesananResponseAll;
import TukangLaundry.restful.dto.pesanan.ViewPesananResponseSingle;



@Service
public class PesananService {

    @Autowired
    private PesananRepository pesananRepo;

    @Autowired
    private KasirService kasirService;

    @Autowired
    private PaketService paketService;

    // Create Pesanan
    public CreatePesananResponse addPesanan(CreatePesananRequest pesananRequest) {
        try {
            Pesanan pesanan = new Pesanan();
            // Cek apakah kasir dan paket ada
            if (kasirService.getKasirById(pesananRequest.getKasirId()) == null) {
                return new CreatePesananResponse(false, "Kasir tidak ditemukan");
            }
            pesanan.setKasirId(pesananRequest.getKasirId());

            if (paketService.getPaketById(pesananRequest.getPaketId()) == null) {
                return new CreatePesananResponse(false, "Paket tidak ditemukan");
            }
            pesanan.setPaketId(pesananRequest.getPaketId());
            pesanan.setStatus(Pesanan.Status.DIPROSES);
            pesanan.setCatatan(pesananRequest.getCatatan());
            pesanan.setBeratKg(pesananRequest.getBeratKg());
            pesanan.setNamaPelanggan(pesananRequest.getNamaPelanggan());
            pesanan.setTanggalPesan(java.time.LocalDateTime.now());
            pesananRepo.save(pesanan);
            return new CreatePesananResponse(true, "Pesanan berhasil ditambahkan");
        } catch (Exception e) {
            return new CreatePesananResponse(false, "Pesanan gagal ditambahkan: " + e.getMessage());
        }
    }

    // View All Pesanan
    public List<ViewPesananResponseAll> getAllPesanan() {
        List<Pesanan> pesananList = pesananRepo.findAll();
        return pesananList.stream().map(pesanan -> {
            ViewPesananResponseAll response = new ViewPesananResponseAll();
            response.setId(pesanan.getId());

            String namaKasir = (kasirService.getKasirById(pesanan.getKasirId())).getName();
            response.setNamaKasir(namaKasir);
            
            String namaPaket = (paketService.getPaketById(pesanan.getPaketId())).getNama();
            response.setNamaPaket(namaPaket);

            response.setBeratKg(pesanan.getBeratKg());
            response.setStatus(pesanan.getStatus().toString());
            response.setNamaPelanggan(pesanan.getNamaPelanggan());
            response.setTanggalPesan(pesanan.getTanggalPesan().toString());
            if (pesanan.getTanggalSelesai() != null) {
                response.setTanggalSelesai(pesanan.getTanggalSelesai().toString());
            }
            return response;
        }).toList();
    }

    // View Single Pesanan
    public ViewPesananResponseSingle getPesananById(Integer Id){
        Optional<Pesanan> pesanan = pesananRepo.findById(Id);
        if (pesanan.isPresent()) {
            Pesanan pesananData = pesanan.get();
            ViewPesananResponseSingle response = new ViewPesananResponseSingle();
            response.setId(pesananData.getId());

            String namaKasir = (kasirService.getKasirById(pesananData.getKasirId())).getName();
            response.setNamaKasir(namaKasir);
            
            String namaPaket = (paketService.getPaketById(pesananData.getPaketId())).getNama();
            response.setNamaPaket(namaPaket);

            response.setBeratKg(pesananData.getBeratKg());
            response.setStatus(pesananData.getStatus().toString());
            response.setCatatan(pesananData.getCatatan());
            response.setNamaPelanggan(pesananData.getNamaPelanggan());
            response.setTanggalPesan(pesananData.getTanggalPesan().toString());
            
            return response;
        } else {
            throw new RuntimeException("Pesanan tidak ditemukan dengan ID: " + Id);
        }

    }

    // Update Pesanan

    // Delete Pesanan
}
