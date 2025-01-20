import { useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    const { events,setEvents, fetchEvents, deleteEvent, loading, error } = useContext(EventContext);
    const navigate = useNavigate();

    // Event finden
    const event = events.find((event) => event.id === id);
    const imageUrl = event?.images && event.images.length > 0 ? event.images[0].url : "default-image.jpg"; // Optional chaining

    useEffect(() => {
        if (!event && !loading && !error) {
            fetchEvents();
        }
    }, [event, loading, error, fetchEvents]);

    if (loading) return <p>Lade Event-Details...</p>;
    if (error) return <p>Es gab ein Problem beim Abrufen des Events.</p>;
    if (!event) return <p>Kein Event mit dieser ID gefunden.</p>;

    // Event löschen
    const handleDelete = () => {
        const confirmDelete = window.confirm("Möchtest du dieses Event wirklich löschen?");
        if (confirmDelete) {
            deleteEvent(id); // Event aus dem Zustand löschen (falls nötig)
            
            // Aktualisiere den Zustand direkt
            const updatedEvents = events.filter((event) => event.id !== id);
            setEvents(updatedEvents); // Zustand sofort aktualisieren
            
            navigate("/list");
        }
    };
    return (
        <div className="event-details">
            <h2>{event.name}</h2>
            <img src={imageUrl} alt={event.name} />
            <p><strong>Datum:</strong> {event.dates.start.localDate}</p>
            <p><strong>Ort:</strong> {event?._embedded?.venues?.[0]?.name || "Ort nicht verfügbar"}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">Mehr Informationen</a>
            <button onClick={handleDelete}>Event löschen</button>
        </div>
    );
};

export default EventDetails;
