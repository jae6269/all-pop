package allpop.backend.controller;

import allpop.backend.dto.MemberDto;
import allpop.backend.entity.Member;
import allpop.backend.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {

    private MemberService memberService;

    @GetMapping("/signup")
    public String signup(){
        return "signup";
    }

    @PostMapping("/signup")
    public String MemberSignup(Member member){
        memberService.signup(member);
        return "login";
    }
}
