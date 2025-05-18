package TukangLaundry.restful.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import TukangLaundry.restful.model.Kasir;

@Repository // menerapkan interface
public interface KasirRepository extends JpaRepository<Kasir, Integer> {
    // untuk find by email
    @Query("SELECT k FROM Kasir k WHERE k.email = :email AND k.deleted = false")
    Optional<Kasir> findByEmail(@Param("email") String email);

    // untuk find all kasir yang deleted false
    @Query("SELECT k FROM Kasir k WHERE k.deleted = false")
    List<Kasir> findAllActiveKasir();

    // untuk find by id kasir yang deleted false
    @Query("SELECT k FROM Kasir k WHERE k.id = :id AND k.deleted = false")
    Optional<Kasir> findActiveKasirById(@Param("id") Integer id);

    // count total kasir aktif
    @Query("SELECT COUNT(k) FROM Kasir k WHERE k.deleted = false")
    Integer countActiveKasir();

}
