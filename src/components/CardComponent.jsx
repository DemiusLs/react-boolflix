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

    return (<div className="card card-hover " >

        <div className="image-container">
            <img src={listElement.poster_path  ? `https://image.tmdb.org/t/p/w342${listElement.poster_path}` : "/img/placeholder-image.jpg"} className="card-img" alt="..." />
        </div>

        <div className="card-img-overlay card-overlay-content ">
            <p className="card-text  mb-1"> <strong>Titolo: </strong> {listElement.name || listElement.title} </p>
            <p className="card-text  mb-1"> <strong>Titolo originale: </strong> {listElement.original_name || listElement.original_title}  </p>
            <p className="card-text mb-1"> <strong>Lingua originale: </strong> <img src={flagUrl} alt="" />  </p>
            <p className="card-text mb-1 ">
                <strong>Voto:</strong>
                <StarsComponent avgVote={listElement.vote_average} />
            </p>
            <p className="card-text overview mb-1">
                <strong>Overview: </strong>{listElement.overview}
            </p>
        </div>
    </div>)
}

export default CardComponent;