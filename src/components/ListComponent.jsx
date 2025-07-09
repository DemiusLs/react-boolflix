import CardComponent from "./CardComponent"

const ListComponent = ({ listArray, title }) => {

    return (
        <section>

            <h2 className='text-center my-4'>{title}</h2>

            <div className="container text-start">

                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3 d-flex">

                    {listArray.map((curMovie, index) => (

                        < div className="col " key={index} >

                            <CardComponent listElement={curMovie} />

                        </div>

                    )

                    )}

                </div>
            </div>

        </section>



    )
}

export default ListComponent;