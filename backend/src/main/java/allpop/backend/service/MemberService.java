package allpop.backend.service;

import allpop.backend.dto.MemberDto;
import allpop.backend.entity.Member;
import allpop.backend.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    private MemberRepository memberRepository;
    public Member signup(Member member){
        return memberRepository.save(member);
    }
}
