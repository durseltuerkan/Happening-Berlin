import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";

const CategoryPage = () => {
  const { category } = useParams(); // Kategorie aus der URL
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "bRok5kTdSZ9Ab2WKb19GmonPXkP7aOiA";

  // Segment-IDs für Kategorien
  const segmentIds = {
    music: "KZFzniwnSyZfZ7v7nJ",
    sports: "KZFzniwnSyZfZ7v7nE",
    artsandtheatre: "KZFzniwnSyZfZ7v7na", // Arts & Theatre Kategorie
  };

  const categoryNames = {
    music: "Musik",
    sports: "Sport",
    artsandtheatre: "Kunst & Theater",
  };
  const categoryTitle = categoryNames[category] || "Unbekannte Kategorie";

  useEffect(() => {
    const fetchEvents = async () => {
      const segmentId = segmentIds[category.toLowerCase()]; // Segment-ID basierend auf der Kategorie
      if (!segmentId) {
        setError("Ungültige Kategorie.");
        setLoading(false);
        return;
      }
      
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API}&city=Berlin&segmentId=${segmentId}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data._embedded && data._embedded.events) {
          setEvents(data._embedded.events);
        } else {
          setEvents([]);
        }
      } catch (err) {
        setError("Fehler beim Abrufen der Events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [category]);

  if (loading) return <p>Lade Events...</p>;
  if (error) return <p>{error}</p>;
  if (events.length === 0) return <p>Keine Events in dieser Kategorie gefunden.</p>;

  return (
    <div className="category">
      <h1>Events in Kategorie: {categoryTitle}</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
