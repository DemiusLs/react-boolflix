import CardComponent from "./CardComponent"

const ListComponent = ({ listArray, title }) => {

    return (
        <div>

            <h2 className='text-center my-4'>{title}</h2>

            <div className="container text-center">

                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2 g-lg-3">

                    {listArray.map((curMovie, index) => (

                        < div className="col" key={index} >

                            <CardComponent listElement={curMovie} />

                        </div>

                    )

                    )}

                </div>
            </div>

        </div>



    )
}

export default ListComponent