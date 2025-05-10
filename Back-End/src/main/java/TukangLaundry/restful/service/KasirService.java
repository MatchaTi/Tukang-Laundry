package TukangLaundry.restful.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.dto.kasir.CreateKasirResponse;
import TukangLaundry.restful.dto.kasir.KasirResponseAll;
import TukangLaundry.restful.dto.kasir.KasirResponseSingle;
import TukangLaundry.restful.dto.kasir.UpdateKasirRequest;
import TukangLaundry.restful.model.Kasir;
import TukangLaundry.restful.repository.KasirRepository;

@Service
public class KasirService implements KasirServiceInterface {

    @Autowired
    private KasirRepository kasirRepo;

    @Override
    public Kasir addKasir(Kasir kasir) {
        // Cek data tidak kosong
        if (kasir.getName() == null || kasir.getEmail() == null || kasir.getPassword() == null) {
            throw new RuntimeException("Data tidak boleh kosong");
        }
        // Cek apakah email sudah ada di database
        Optional<Kasir> existingKasir = kasirRepo.findByEmail(kasir.getEmail());
        if (existingKasir.isPresent()) {
            throw new RuntimeException("Email sudah terdaftar");
        }
        return kasirRepo.save(kasir);
    }

    @Override
    public List<KasirResponseAll> getAllKasir() {
        List<Kasir> kasirList = kasirRepo.findAllActiveKasir();
        return kasirList.stream().map(kasir -> {
            KasirResponseAll response = new KasirResponseAll();
            response.setId(kasir.getId());
            response.setName(kasir.getName());
            response.setEmail(kasir.getEmail());
            response.setRole("Kasir");
            return response;
        }).toList();
    }

    @Override
    public KasirResponseSingle getKasirById(Integer id) {
        Optional<Kasir> kasirOpt = kasirRepo.findActiveKasirById(id);
        if (kasirOpt.isPresent()) {
            Kasir kasir = kasirOpt.get();
            KasirResponseSingle response = new KasirResponseSingle();
            response.setId(kasir.getId());
            response.setName(kasir.getName());
            response.setEmail(kasir.getEmail());
            response.setRole("Kasir");
            response.setPassword(kasir.getPassword());
            return response;
        } else {
            throw new RuntimeException("Kasir tidak ditemukan dengan ID: " + id);
        }
    }

    @Override
    public CreateKasirResponse updateKasirById(UpdateKasirRequest request) {
        Optional<Kasir> kasirOpt = kasirRepo.findActiveKasirById(request.getId());
        if (kasirOpt.isPresent()) {
            Kasir kasir = kasirOpt.get();
            kasir.setName(request.getName());
            kasir.setEmail(request.getEmail());
            kasir.setPassword(request.getPassword());
            kasirRepo.save(kasir);
            return new CreateKasirResponse(true, "Kasir berhasil diperbarui");
        } else {
            return new CreateKasirResponse(false, "Kasir tidak ditemukan dengan ID: " + request.getId());
        }
    }

    @Override
    public CreateKasirResponse deleteKasirById(Integer id) {
        Optional<Kasir> kasirOpt = kasirRepo.findById(id);
        if (kasirOpt.isPresent()) {
            Kasir kasir = kasirOpt.get();
            kasir.setDeleted(true);
            kasir.setEmail(null);
            kasirRepo.save(kasir);
            return new CreateKasirResponse(true, "Kasir berhasil dihapus");
        } else {
            return new CreateKasirResponse(false, "Kasir tidak ditemukan dengan ID: " + id);
        }
    }

}

interface KasirServiceInterface {
    Kasir addKasir(Kasir kasir);

    List<KasirResponseAll> getAllKasir();

    KasirResponseSingle getKasirById(Integer id);

    CreateKasirResponse updateKasirById(UpdateKasirRequest request);

    CreateKasirResponse deleteKasirById(Integer id);
}
