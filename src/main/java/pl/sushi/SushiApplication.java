package pl.sushi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Pageable;
import pl.sushi.Category.Category;
import pl.sushi.Category.CategoryRepository;
import pl.sushi.Product.Product;
import pl.sushi.Product.ProductRepository;

import java.util.Dictionary;
import java.util.List;

@SpringBootApplication
public class SushiApplication {


	public static void main(String[] args) {
		SpringApplication.run(SushiApplication.class, args);
	}

}