package pl.sushi.NavbarItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NavbarItemService {

    private final NavbarItemRepository navbarItemRepository;

    @Autowired
    public NavbarItemService(NavbarItemRepository navbarItemRepository) {
        this.navbarItemRepository = navbarItemRepository;
    }

    public List<NavbarItem> getNavbarItems() {
        return navbarItemRepository.findAll();
    }
}
