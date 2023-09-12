package allpop.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberDto {
    Long id;
    String email;
    String password;
    String username;
    String address;
    public MemberDto(){

    }
}
