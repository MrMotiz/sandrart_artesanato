import {WorkCard} from "../works";
import {GalleryContainer} from "./styles";
import {allWorks} from "../../utils/works";

function AllWorks(){
    return(
        <GalleryContainer>
            {allWorks.map((elem, count) => {
                    return (
                        <WorkCard key={count}>
                            <img src={elem.img} alt={elem.title} />
							<h1>{elem.title}</h1>
						</WorkCard>
					);
				})}
        </GalleryContainer>
    )
}

export{AllWorks};