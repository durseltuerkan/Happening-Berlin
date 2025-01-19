import { Link } from "react-router-dom"
const EventCard = ({event}) => {
    // Formatieren des Datums
const formattedDate = new Date(event.dates.start.localDate).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  
    const imageUrl = event.images && event.images.length > 0 ? event.images[0].url : "default-image.jpg";

    return (
        <div className="event-card">
            <img src={imageUrl} alt={event.name}/>
            <h2>{event.name}</h2>
            <p><strong>Datum:</strong> {formattedDate} </p> 
            {/* <p><strong>Ort:</strong> {event._embedded.venues && event._embedded.venues[0] ? event._embedded.venues[0].name : "Theater am Potsdamer Platz"}</p> */}
            <Link to={`/event/${event.id}`} className="link">Event Details ansehen</Link>

        </div>
    )
}
export default EventCard