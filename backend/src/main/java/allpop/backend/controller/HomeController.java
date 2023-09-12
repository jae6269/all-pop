package allpop.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

public class HomeController {

    @GetMapping("/")
    public String index(){
        return "index";
    }
}
