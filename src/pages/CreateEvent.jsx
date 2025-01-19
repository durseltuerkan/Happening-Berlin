import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventForm from "../components/EventForm";
import { useNavigate } from "react-router-dom"; // Zum Navigieren nach dem Event-Erstellen

const CreateEvent = () => {
  const { addEvent } = useContext(EventContext); // Zugriff auf die addEvent-Funktion aus dem EventContext
  const navigate = useNavigate(); // Hook für Navigation

  // Funktion zum Hinzufügen des neuen Events
  const handleAddEvent = (formData) => {
    const newEvent = {
      id: Date.now(), // Eine einfache Methode zur Erstellung einer eindeutigen ID
      name: formData.name,
      dates: { start: { localDate: formData.date } },
      _embedded: { venues: [{ name: formData.venue }] },
      description: formData.description,
      images: [{ url: formData.imageUrl }],
    };

    // Event zum globalen Zustand hinzufügen
    addEvent(newEvent);

    // Nach dem Erstellen des Events zur Event-Liste oder einer anderen Seite navigieren
    navigate("/list"); // Passe den Pfad nach deinen Bedürfnissen an
  };

  return (
    <div className="new-event">
      <h2>Neues Event erstellen</h2>
      <EventForm onSubmit={handleAddEvent} /> {/* Übergibt die onSubmit-Funktion an das Formular */}
    </div>
  );
};

export default CreateEvent;
