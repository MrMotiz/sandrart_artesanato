import styled from "styled-components";

const CommentsSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 100%;
    background: ${({ theme }) => theme["light-red"]};
    @media (max-width: 768px) {
        flex-wrap: wrap;
        height: 100%;
        padding: 10px;
        gap: 10px;
}   
`;

const CommentsSectionTitle= styled.h1`
    margin: 10px;
    color: #DD116A;
    @media (max-width: 414px) {
        font-size:20px;
}
`;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(245, 245, 245, 0.2);
    height:150px;
    width: 450px;
    border-radius: 20px;
    color: ${({ theme }) => theme["white-purple"]};
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
        width: 300px;
        height: 100px;
}
`;
const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 0;
	padding: 0;
	margin: 0px 20px;
	border-radius: 10px;
    @media (max-width: 768px) {
        margin: 0px;
}
`;
const UserPicture= styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: 5px 10px;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        margin: 2.5px 5px;
}
`;
const Username = styled.h3`
    margin: 5px 5px;
	top: 0;
	font-size: 15px;
	width: 100px;
	color: ${({ theme }) => theme["white-purple"]};
`;

const CommentInfo= styled.div`
	width: 900px;
    padding: 0px 20px;
`;
const CommentTitle = styled.h1`
    color: white;
    margin: 0;
    font-size:25px;
    @media (max-width: 768px) {
        font-size:17.5px;
}
    `;

const CommentText = styled.p`
		font-size: 15px;
		color: ${({ theme }) => theme["white-purple"]};
        padding: 10px 0px;
        @media (max-width: 768px) {
        font-size:10px;
}
    `;

export {CommentsSection ,CommentsSectionTitle,CommentContainer, UserInfo , UserPicture,Username,CommentInfo, CommentTitle, CommentText};