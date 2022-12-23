import { LatestWorksContainer,LatestWorksGrid, LatestWorksTitle } from "./styles";
import {WorkCard} from "../works";
import {allWorks} from "../../utils/works";

function LatestWorks(){
    return(<>
        <LatestWorksTitle>Trabalho mais recentes</LatestWorksTitle>
        <LatestWorksContainer>
            <LatestWorksGrid>  
            {allWorks.map((elem, count) => {
                if(count <= 6){
                    return (<WorkCard key={count}>
                            <img src={elem.img} alt={elem.title} />
							<h1>{elem.title}</h1>
						</WorkCard>
					);
                }
                return null;
				})}
            
            </LatestWorksGrid>
        </LatestWorksContainer>
    </>
    );
}


export {LatestWorks};