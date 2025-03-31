
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../LandingPage.css"


export default function Home () {
    return (
        <div className="home-page">
            <Header />
                <div className="content">
                    <div className="overlay">
                        <h1>Let's get cooking</h1>
                    </div>
                </div>
                <div>
                    <h3>Add a text presenting the app</h3>
                    <h3>Add a carousel with a random show of API recipe images</h3>
                </div>
            <Footer/>
        </div>
    )
}
