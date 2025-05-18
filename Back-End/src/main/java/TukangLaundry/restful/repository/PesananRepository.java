package TukangLaundry.restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import TukangLaundry.restful.model.Pesanan;

@Repository
public interface PesananRepository extends JpaRepository<Pesanan, Integer> {
    // Count total pesanan
    @Query("SELECT COUNT(p) FROM Pesanan p")
    Integer countPesanan();
    
}
