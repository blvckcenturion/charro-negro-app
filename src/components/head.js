import { Helmet } from "react-helmet"

const Head = ({ title, bgColor }) => {
    console.log("Mabe by Santiago Sarabia - @blvckcenturion")
    return (
        <div>
            <Helmet>
                <title>{`${title} - Charro Negro Food Truck` }</title>
                <meta name="description" content={"Charro Negro Food Truck - BEACH AND BARRIO FOOD"}/>
                <meta property="og:title" content={title} />
                <meta property="title" content={"Charro Negro Food Truck"}/>
                <meta property="og:description" content={"Charro Negro Food Truck - BEACH AND BARRIO FOOD"}/>
                <meta property="og:url" content="https://charronegrofoodtruck.com"/>
                <meta property="og:type" content="restaurant" />
                <meta name="theme-color" content={ bgColor} />
                <meta name="msapplication-TileColor" content="#F4F6F3"/>
            </Helmet>
        </div>
    )
}

export default Head
