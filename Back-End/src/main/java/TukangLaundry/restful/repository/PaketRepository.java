package TukangLaundry.restful.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import TukangLaundry.restful.model.Paket;



@Repository
public interface PaketRepository extends JpaRepository<Paket, Integer> { 

    // Paket Deleted = false
    @Query("SELECT p FROM Paket p WHERE p.deleted = false")
    List<Paket> findAllPaket();

    // Paket status aktif
    @Query("SELECT p FROM Paket p WHERE p.status = 'AKTIF' AND p.deleted = false")
    List<Paket> findAllPaketActive();

    // Find Paket deleted = false by id
    @Query("SELECT p FROM Paket p WHERE p.id = :id AND p.deleted = false")
    Optional<Paket> findPaketById(@Param("id") Integer id);

}
