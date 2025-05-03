package TukangLaundry.restful.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TukangLaundry.restful.model.Paket;

@Repository
public interface PaketRepository extends JpaRepository<Paket, Integer> { 
    Optional<Paket> findByNama(String nama);
}
