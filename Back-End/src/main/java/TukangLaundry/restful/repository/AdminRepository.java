package TukangLaundry.restful.repository;

import java.util.Optional;
import TukangLaundry.restful.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
}