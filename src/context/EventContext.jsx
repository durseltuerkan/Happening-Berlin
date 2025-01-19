import { createContext, useState, useEffect } from "react";
export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState({ name: "Max", myEvents: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //API-Aufruf für Events
    const fetchEvents = async () => {
        const API = "bRok5kTdSZ9Ab2WKb19GmonPXkP7aOiA";
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API}&city=Berlin`;

            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();

                if(data._embedded && data._embedded.events) {
                    setEvents(data._embedded.events)
                }else {
                    setEvents([]);
                }
                

                // console.log("API-Antwort:", data);
            } catch (err) {
                setError("Fehler beim Aufrufen der Events", err)
            } finally {
                setLoading(false);
            }
        };

        useEffect(() => {
            fetchEvents();
        },[])

  //Events hinzufügen
   const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent])
  };
 //Events löschen
 const deleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId))
 };

  return (
    <EventContext.Provider value={{ events, setEvents, fetchEvents, addEvent, deleteEvent, user, setUser, loading, error }}>
      {children}
    </EventContext.Provider>
  );
};