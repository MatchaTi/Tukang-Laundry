package TukangLaundry.restful.repository;

import TukangLaundry.restful.model.Kasir;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // menerapkan interface
public interface KasirRepository extends JpaRepository<Kasir, Integer> {
    Optional<Kasir> findByEmail(String email);
}
