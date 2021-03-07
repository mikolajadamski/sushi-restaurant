package pl.sushi.NavbarItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/navbar_items")
public class NavbarItemController {

    private final NavbarItemService navbarItemService;

    @Autowired
    public NavbarItemController(NavbarItemService navbarItemService) {
        this.navbarItemService = navbarItemService;
    }

    @GetMapping
    public List<NavbarItem> getNavbarItems(){
        return navbarItemService.getNavbarItems();
    }
}
