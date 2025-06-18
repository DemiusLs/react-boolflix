import StarsComponent from "./StarsComponent";


const CardComponent = ({ listElement }) => {

    const flags = [
        {
            language: "it",
            flagurl: "/img/itflag.png"
        },

        {
            language: "jap",
            flagurl: "/img/japanflag.png"
        },
        {
            language: "en",
            flagurl: "/img/engflag.png"
        },


    ]

    const flagItem = flags.find(flag => flag.language === listElement.original_language);
    const flagUrl = flagItem ? flagItem.flagurl : "/img/sriflag.png";

    return (<div className="card" >
        <div className="card-header">
            {listElement.name !== undefined ? "Serie" : "Film"}
        </div>
        <img src={`https://image.tmdb.org/t/p/w342${listElement.poster_path}`} className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text">{listElement.name}|| {listElement.title}</p>
            <p className="card-text">{listElement.original_name} || {listElement.original_title}</p>
            <p className="card-text"> <img src={flagUrl} alt="" />{listElement.original_language}</p>
            <p className="card-text">
                <StarsComponent avgVote={listElement.vote_average} />
            </p>
        </div>
    </div>)
}

export default CardComponent;