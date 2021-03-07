package pl.sushi.NavbarItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NavbarItemRepository  extends JpaRepository<NavbarItem, String> {
}

