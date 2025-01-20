import { NavLink } from "react-router-dom"
const NotFoundPage = () => {
    return (
        <div className="notfound-container">
            <h1 className="notfound-heading">404</h1>
            <p className="notfound-text">Oops!Die Seite, die du suchst, existiert nicht!</p>
            <NavLink to="/" className="notfound-link">Zurück zur Startseite</NavLink>
        </div>
    )
}
export default NotFoundPage