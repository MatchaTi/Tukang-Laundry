package TukangLaundry.restful.repository;

import java.util.Optional;
import TukangLaundry.restful.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> { // Menerapkan interface
    Optional<Admin> findByEmail(String email);
}