import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import { CommentsSection,CommentsSectionTitle, CommentContainer,UserInfo , UserPicture,Username,CommentInfo, CommentTitle, CommentText } from "./styles";

function Comments(){
    return( 
    <>
    <CommentsSectionTitle>Testemunhos</CommentsSectionTitle>
    <CommentsSection>
        <CommentContainer>
            <UserInfo>
                <UserPicture src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x" alt="" />
            <Username>Brad Pitt</Username>
            </UserInfo>
            <CommentInfo>
            <CommentTitle>Grande Trabalho</CommentTitle>
            <CommentText>Fiz uma encomenda de um quadro de nascimento e ficou mesmo bem! <br/>
            Muito Obrigado pelo cuidado!</CommentText>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarHalf style={{color:"white"}}/>
            </CommentInfo>
        </CommentContainer>
        <CommentContainer>
            <UserInfo>
                <UserPicture src="https://cdn.jornaldenegocios.pt/images/2020-07/img_1200x1200$2020_07_17_18_58_14_380221.jpg" alt="" />
            <Username>Cristina Ferreira</Username>
            </UserInfo>
            <CommentInfo>
            <CommentTitle>5 Estrelas</CommentTitle>
            <CommentText>Adorei o meu boneco do Gocha!</CommentText>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            </CommentInfo>
        </CommentContainer><CommentContainer>
            <UserInfo>
                <UserPicture src="https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt="" />
            <Username>Arnold Schwarzenegger</Username>
            </UserInfo>
            <CommentInfo>
            <CommentTitle>Loved it!</CommentTitle>
            <CommentText>I will be back!</CommentText>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStarFill style={{color:"white"}}/>
            <BsStar style={{color:"white"}}/>
            </CommentInfo>
        </CommentContainer>
        
    </CommentsSection>
    </>
    );
}

export{Comments};