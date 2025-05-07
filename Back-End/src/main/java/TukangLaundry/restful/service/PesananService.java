package TukangLaundry.restful.service;

// Keep the unused imports to avoid confusion
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.dto.pesanan.CreatePesananRequest;
import TukangLaundry.restful.dto.pesanan.CreatePesananResponse;
import TukangLaundry.restful.dto.pesanan.UpdatePesananRequest;
import TukangLaundry.restful.dto.pesanan.ViewPesananResponseAll;
import TukangLaundry.restful.dto.pesanan.ViewPesananResponseSingle;
import TukangLaundry.restful.model.Kasir;
import TukangLaundry.restful.model.Paket;
import TukangLaundry.restful.model.Pesanan;
import TukangLaundry.restful.repository.KasirRepository;
import TukangLaundry.restful.repository.PaketRepository;
import TukangLaundry.restful.repository.PesananRepository;


@Service
public class PesananService {

    @Autowired
    private PesananRepository pesananRepo;

    @Autowired
    private KasirRepository kasirRepo;

    @Autowired
    private PaketRepository paketRepo;


    // Create Pesanan
    public CreatePesananResponse addPesanan(CreatePesananRequest pesananRequest) {
        try {
            Pesanan pesanan = new Pesanan();

            Optional<Kasir> kasirOpt = kasirRepo.findById(pesananRequest.getKasirId());
            if (kasirOpt.isEmpty()) {
                return new CreatePesananResponse(false, "Kasir tidak ditemukan");
            }
            Kasir kasir = kasirOpt.get();
            pesanan.setKasir(kasir);

            Optional<Paket> paketOpt = paketRepo.findById(pesananRequest.getPaketId());
            if (paketOpt.isEmpty()) {
                return new CreatePesananResponse(false, "Paket tidak ditemukan");
            }
            Paket paket = paketOpt.get();
            pesanan.setPaket(paket);

            pesanan.setBeratKg(pesananRequest.getBeratKg());
            pesanan.setCatatan(pesananRequest.getCatatan());
            pesanan.setNamaPelanggan(pesananRequest.getNamaPelanggan());
            pesanan.setStatus(Pesanan.Status.DIPROSES);
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

            String namaKasir = pesanan.getKasir().getName();
            response.setNamaKasir(namaKasir);
            
            String namaPaket = pesanan.getPaket().getNama();
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
    public ViewPesananResponseSingle getPesananById(Integer id){
        Optional<Pesanan> pesananOpt = pesananRepo.findById(id);
        if (pesananOpt.isPresent()) {
            Pesanan pesanan = pesananOpt.get();
            ViewPesananResponseSingle response = new ViewPesananResponseSingle();
            response.setId(pesanan.getId());

            String namaKasir = pesanan.getKasir().getName();
            response.setNamaKasir(namaKasir);
            
            String namaPaket = pesanan.getPaket().getNama();
            response.setNamaPaket(namaPaket);

            response.setBeratKg(pesanan.getBeratKg());
            response.setStatus(pesanan.getStatus().toString());
            response.setCatatan(pesanan.getCatatan());
            response.setNamaPelanggan(pesanan.getNamaPelanggan());
            response.setTanggalPesan(pesanan.getTanggalPesan().toString());
            
            return response;
        } else {
            throw new RuntimeException("Pesanan tidak ditemukan dengan ID: " + id);
        }

    }

    // Update Pesanan
    public CreatePesananResponse updatePesananById(UpdatePesananRequest request){
        Optional<Pesanan> pesananOpt = pesananRepo.findById(request.getId());
        if (pesananOpt.isPresent()) {
            Pesanan pesanan = pesananOpt.get();

            Optional<Kasir> kasirOpt = kasirRepo.findById(request.getKasirId());
            if (kasirOpt.isEmpty()) {
                return new CreatePesananResponse(false, "Kasir tidak ditemukan");
            }
            
            Optional<Paket> paketOpt = paketRepo.findById(request.getPaketId());
            if (paketOpt.isEmpty()) {
                return new CreatePesananResponse(false, "Paket tidak ditemukan");
            }
            
            pesanan.setKasir(kasirOpt.get());
            pesanan.setPaket(paketOpt.get());
            pesanan.setNamaPelanggan(request.getNamaPelanggan());
            pesanan.setBeratKg(request.getBeratKg());
            pesanan.setCatatan(request.getCatatan());

            if (pesanan.getStatus() == Pesanan.Status.SELESAI && request.getStatus().equals("DIPROSES")) {
                pesanan.setTanggalSelesai(null);
            } else if (pesanan.getStatus() == Pesanan.Status.DIPROSES && request.getStatus().equals("SELESAI")) {
                pesanan.setTanggalSelesai(java.time.LocalDateTime.now());
            }
            pesanan.setStatus(Pesanan.Status.valueOf(request.getStatus()));
            pesananRepo.save(pesanan);

            return new CreatePesananResponse(true, "Pesanan berhasil diupdate");
        }
        else {
            return new CreatePesananResponse(false, "Pesanan gagal diupdate");
        }
    }

    // Delete Pesanan
    public CreatePesananResponse deletePesananById (Integer id){
        Optional<Pesanan> pesananOpt = pesananRepo.findById(id);
        if (pesananOpt.isPresent()) {
            pesananRepo.delete(pesananOpt.get());
            return new CreatePesananResponse(true, "Pesanan berhasil dihapus");
        } else {
            return new CreatePesananResponse(false, "Pesanan gagal dihapus");
        }
    }
}
