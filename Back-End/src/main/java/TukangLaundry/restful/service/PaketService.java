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
public class PaketService implements PaketServiceInterface {

    @Autowired
    private PaketRepository paketRepo;

    @Override
    public Paket addPaket(Paket paket) {
        return paketRepo.save(paket);
    }
    
    
    @Override
    public List<ViewPaketResponseAll> getAllPaket() {
        List<Paket> paketList = paketRepo.findAllPaket();
        if (paketList.isEmpty()) {
            throw new RuntimeException("Tidak ada paket layanan yang tersedia");
        }
        return paketList.stream().map(paket -> {
            ViewPaketResponseAll response = new ViewPaketResponseAll();
            response.setId(paket.getId());
            response.setNama(paket.getNama());
            response.setHarga_per_kg(paket.getHarga_per_kg());
            response.setStatus(paket.getStatus().toString());
            return response;
        }).toList();
    }

    
    @Override
    public List<ViewPaketResponseAll> getAllPaketActive() {
        List<Paket> paketList = paketRepo.findAllPaketActive();
        if (paketList.isEmpty()) {
            
            throw new RuntimeException("Tidak ada paket layanan yang aktif ");
        }
        return paketList.stream().map(paket -> {
            ViewPaketResponseAll response = new ViewPaketResponseAll();
            response.setId(paket.getId());
            response.setNama(paket.getNama());
            response.setHarga_per_kg(paket.getHarga_per_kg());
            response.setStatus(paket.getStatus().toString());
            return response;
        }).toList();
    }
    
    @Override
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
            throw new RuntimeException("Paket Layanan tidak ditemukan (Id: " + id + ")");
        }
    }
    
    
    @Override
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
            return new CreatePaketResponse(false, "Paket Layanan tidak ditemukan (Id:" + request.getId() + ")");
        }
    }
    
    
    @Override
    public CreatePaketResponse deletePaketbyId(Integer id) {
        Optional<Paket> paketOpt = paketRepo.findPaketById(id);
        if (paketOpt.isPresent()) {
            Paket paket = paketOpt.get();
            paket.setDeleted(true);
            paketRepo.save(paket);
            return new CreatePaketResponse(true, "Paket Layanan berhasil dihapus (Id: " + id + ")");
        } else {
            return new CreatePaketResponse(false, "Paket Layanan Gagal Dihapus (Id: " + id + ")");
        }
    }
    
}

interface PaketServiceInterface {
    Paket addPaket(Paket paket);
    List<ViewPaketResponseAll> getAllPaket();
    List<ViewPaketResponseAll> getAllPaketActive();
    ViewPaketResponseSingle getPaketById(Integer id);
    CreatePaketResponse updatePaketById(UpdatePaketRequest request);
    CreatePaketResponse deletePaketbyId(Integer id);
}
