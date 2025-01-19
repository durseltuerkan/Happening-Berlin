import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/list");
    }
    return (
        <div className="homepage">
            <div className="homepage-content">
                <h1>Willkommen zu Happening Berlin!</h1>
                <p>Entdecke die besten Events in Berlin</p>
                <button onClick={handleClick}>Jetzt endecken</button>
            </div>
        </div>
    )
}
export default Home