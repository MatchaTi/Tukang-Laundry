package TukangLaundry.restful.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "kasir")
public class Kasir extends User {

    public Kasir() {
        this.role = Role.KASIR;
    }
}
