package TukangLaundry.restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TukangLaundry.restful.model.Pesanan;

@Repository
public interface PesananRepository extends JpaRepository<Pesanan, Integer> {
}
