import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import EventCard from "../components/EventCard"
const EventList = () => {
    const { events, loading, error } = useContext(EventContext);
    
    if(loading) return <p>Lade Events</p>
    if(error) return <p>{error}</p>
    return (
        <div className="container-list">
            <h1>Events in Berlin</h1>
            <div className="event-list">
            {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
            </div>
        </div>
    )
}
export default EventList