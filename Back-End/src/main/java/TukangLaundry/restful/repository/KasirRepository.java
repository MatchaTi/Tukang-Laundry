package TukangLaundry.restful.repository;

import TukangLaundry.restful.model.Kasir;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KasirRepository extends JpaRepository<Kasir, Integer> {
    Optional<Kasir> findByEmail(String email);
}
