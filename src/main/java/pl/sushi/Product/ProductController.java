package pl.sushi.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping
    public List<Product> getAllProducts(){
        return this.productService.getAllProducts();
    }

    @GetMapping(path = "{category_id}")
    public List<Product> getProductsByCategory(@PathVariable("category_id") Integer categoryId){
        return productService.getProductsByCategory(categoryId);
    }


}
