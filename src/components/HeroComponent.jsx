
const HeroBanner = ({ movie }) => {


    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <section>

            <div style={backgroundStyle} className="shadow-lg position-relative">
                <div className="container">
                    <div className="col-md-8">
                        <h1 className="display-3 fw-bold">{movie.title}</h1>
                        <p className="lead">{movie.overview}</p>
                        <button className="btn btn-primary btn-lg">Guarda ora</button>
                    </div>
                </div>
                {/* Overlay gradient */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                        zIndex: 0,
                    }}
                ></div>
            </div>
        </section>
    )
}

export default HeroBanner;