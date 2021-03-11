package pl.sushi.NavbarItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/navbar_items")
public class NavbarItemController {

    private final NavbarItemService navbarItemService;

    @Autowired
    public NavbarItemController(NavbarItemService navbarItemService) {
        this.navbarItemService = navbarItemService;
    }

    @GetMapping
    public List<NavbarItem> getNavbarItems(){
        System.out.printf(navbarItemService.getNavbarItems().toString());
        return navbarItemService.getNavbarItems();
    }

}
