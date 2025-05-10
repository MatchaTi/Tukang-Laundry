package TukangLaundry.restful.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin extends User { // Menerapkan abstract class dan inheritance

    public Admin() {
        this.role = Role.ADMIN;
    }

    @Override
    public Role getRole() {
        return role;
    }
}
