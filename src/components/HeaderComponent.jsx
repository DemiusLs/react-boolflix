import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const HeaderComponent = () => {

    const navLinks = [

        {
            titolo: "Home",
            url: "/"
        },
        {
            titolo: "Series",
            url: "/series"
        },
        {
            titolo: "Movies",
            url: "/movies"
        },
        {
            titolo: "My List",
            url: "/myList"
        },
        {
            titolo: "Search by Language",
            url: "/original-audio"
        },
    ]

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {navLinks.map((curLink, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link active" aria-current="page" to={curLink.url} >{curLink.titolo} </NavLink>
                                </li>
                            ))}

                            <li className="nav-item">
                                <a className="nav-link" href="">Link</a>
                            </li>


                        </ul>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent