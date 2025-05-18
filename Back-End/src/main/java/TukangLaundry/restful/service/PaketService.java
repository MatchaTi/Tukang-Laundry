package TukangLaundry.restful.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.dto.paket.CreatePaketResponse;
import TukangLaundry.restful.dto.paket.UpdatePaketRequest;
import TukangLaundry.restful.dto.paket.ViewPaketResponseAll;
import TukangLaundry.restful.dto.paket.ViewPaketResponseSingle;
import TukangLaundry.restful.model.Paket;
import TukangLaundry.restful.repository.PaketRepository;

@Service
public class PaketService {

    @Autowired
    private PaketRepository paketRepo;

    public Paket addPaket(Paket paket) {
        return paketRepo.save(paket);
    }

    public List<ViewPaketResponseAll> getAllPaket() {
        List<Paket> paketList = paketRepo.findAllPaket();
        return paketList.stream().map(paket -> {
            ViewPaketResponseAll response = new ViewPaketResponseAll();
            response.setId(paket.getId());
            response.setNama(paket.getNama());
            response.setHarga_per_kg(paket.getHarga_per_kg());
            response.setStatus(paket.getStatus().toString());
            return response;
        }).toList();
    }

    // Mengambil semua paket yang statusnya aktif


    public ViewPaketResponseSingle getPaketById(Integer id) {
        Optional<Paket> paketOpt = paketRepo.findPaketById(id);
        if (paketOpt.isPresent()) {
            Paket paket = paketOpt.get();
            ViewPaketResponseSingle response = new ViewPaketResponseSingle();
            response.setId(paket.getId());
            response.setNama(paket.getNama());
            response.setHarga_per_kg(paket.getHarga_per_kg().toString());
            response.setCatatan(paket.getCatatan());
            response.setStatus(paket.getStatus().toString());
            return response;
        } else {
            throw new RuntimeException("Paket Layanan tidak ditemukan dengan ID: " + id);
        }
    }

    public CreatePaketResponse updatePaketById(UpdatePaketRequest request) {
        Optional<Paket> paketOpt = paketRepo.findPaketById(request.getId());
        if (paketOpt.isPresent()) {
            Paket paket = paketOpt.get();
            paket.setNama(request.getNama());
            paket.setHarga_per_kg(request.getHarga_per_kg());
            paket.setCatatan(request.getCatatan());
            paket.setStatus(Paket.Status.valueOf(request.getStatus()));
            paketRepo.save(paket);
            return new CreatePaketResponse(true, "Paket Layanan Berhasil Diupdate");
        } else {
            return new CreatePaketResponse(false, "Paket Layanan Gagal Diupdate");
        }
    }

    public CreatePaketResponse deletePaketbyId(Integer id) {
        Optional<Paket> paketOpt = paketRepo.findPaketById(id);
        if (paketOpt.isPresent()) {
            Paket paket = paketOpt.get();
            paket.setDeleted(true);
            paketRepo.save(paket);
            return new CreatePaketResponse(true, "Paket berhasil dihapus");
        } else {
            return new CreatePaketResponse(false, "Paket Layanan Gagal Dihapus");
        }
    }

}
