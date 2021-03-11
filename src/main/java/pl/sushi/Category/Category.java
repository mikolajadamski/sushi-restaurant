package pl.sushi.Category;

import org.hibernate.annotations.NaturalId;
import pl.sushi.Product.Product;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
public class Category {

    @Id
    @Column(name = "category_id")
    private int id;

    @Column(length = 50)
    private String name;

    private int amount;


    public Category() {
    }

    public Category(String name, int amount) {
        this.name = name;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

}
