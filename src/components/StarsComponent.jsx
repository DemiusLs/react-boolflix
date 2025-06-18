import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarsComponent = ({ avgVote }) => {

    const vote = new Array(5).fill(0)
    const filmvote = Math.ceil(avgVote / 2)

    return (
        <>
            {vote.map((curEl, index) => (

                <FontAwesomeIcon icon={faStar} className={index <= filmvote - 1 ? "yellow" : ""} key={`${index}`} />))}
        </>

    )
}

export default StarsComponent;