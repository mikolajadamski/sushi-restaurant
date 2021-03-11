package pl.sushi.Product;

import org.hibernate.annotations.NaturalId;
import pl.sushi.Category.Category;

import javax.persistence.*;

@Entity
@Table
public class Product {

    @Id
    @Column(name = "product_id")
    private int id;

    @NaturalId
    private String name;

    private String ingredients;

    private float price;

    @ManyToOne(optional = false)
    @JoinColumn(name="category_id", nullable = false, foreignKey = @ForeignKey(name = "fk_product") )
    private Category category;


    public Product() {
    }

    public Product(String name, String ingredients, float price, Category category) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.category = category;
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

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
