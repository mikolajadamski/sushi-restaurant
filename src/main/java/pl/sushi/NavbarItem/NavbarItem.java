package pl.sushi.NavbarItem;

import javax.persistence.*;

@Entity
@Table
public class NavbarItem {
    @Id

    private String name;

    public NavbarItem() {
    }

    public NavbarItem(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

