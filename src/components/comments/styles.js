import styled from "styled-components";

const CommentsSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    height: 200px;
    width: 100%;
    background: purple;
`;

const CommentsSectionTitle= styled.h1`
    margin: 10px;
    color: ${({ theme }) => theme.secondaryColor}
`;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    background: rgba(245, 245, 245, 0.2);
    height:150px;
    width: 500px;
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
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
`;
const UserPicture= styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: 5px 10px;
`;
const Username = styled.h3`
    margin: 5px 5px;
	top: 0;
	font-size: 15px;
	width: 100px;
	color: lightgray;
`;

const CommentInfo= styled.div`
	width: 900px;
    padding: 0px 20px;
`;
const CommentTitle = styled.h1`
    color: white;
    margin: 0;
    `;

const CommentText = styled.p`
		font-size: 15px;
		color: lightgray;
    `;

export {CommentsSection ,CommentsSectionTitle,CommentContainer, UserInfo , UserPicture,Username,CommentInfo, CommentTitle, CommentText};