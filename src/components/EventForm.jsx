import { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    venue: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.imageUrl.startsWith("http") && !formData.imageUrl.startsWith("https")) {
      alert("Bitte gib eine gültige Bild-URL ein.");
      return;
    }
  
    onSubmit(formData); // Übergibt die Formulardaten an die übergebene Funktion
    setFormData({
      name: "",
      date: "",
      venue: "",
      description: "",
      imageUrl: "",
    }); // Formular zurücksetzen
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label>Event Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Datum:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Veranstaltungsort:</label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Beschreibung:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Bild URL:</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Event erstellen</button>
    </form>
  );
};

export default EventForm;

