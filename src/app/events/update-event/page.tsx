"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type Event = {
  event_id: string;
  event_name: string;
  event_date: string;
  duration: number;
  event_description: string;
  poster: string;
  whatsapp_link?: string;
  visibility?: boolean;
};

export default function UpdateEventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [eventData, setEventData] = useState<Partial<Event>>({});
  const [message, setMessage] = useState("");
  const router = useRouter();

  //fetch events for dropdown
  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data.events));
  }, []);

  // Fetch event details when dropdown changes
  useEffect(() => {
    if (selectedId) {
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "fetch", event_id: selectedId }),
      })
        .then(res => res.json())
        .then(data => setEventData(data.event));
    } else {
      setEventData({});
    }
  }, [selectedId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  // update event details when clicked update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/events", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...eventData, event_id: selectedId, duration: Number(eventData.duration) }),
    });
    if (res.ok) {
      setMessage("Event updated!");
      setTimeout(() => router.push("/events"), 1000);
    } else {
      setMessage("Failed to update event.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Update Event</h1>
      <label className="block mb-2 font-semibold">Select Event:</label>
      <select
        className="border p-2 rounded mb-6 w-full text-black bg-white"
        value={selectedId}
        onChange={e => setSelectedId(e.target.value)}
      >
        <option value="">-- Select an event --</option>
        {events.map(ev => (
          <option key={ev.event_id} value={ev.event_id}>
            {ev.event_name}
          </option>
        ))}
      </select>

     {selectedId && eventData && (
  <form onSubmit={handleUpdate} className="flex flex-col gap-4">
    <input
      name="event_name"
      placeholder="Event Name"
      value={eventData.event_name || ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <input
      name="event_date"
      type="datetime-local"
      value={eventData.event_date ? eventData.event_date.slice(0, 16) : ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <input
      name="event_description"
      placeholder="Event Description"
      value={eventData.event_description || ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <input
      name="poster"
      placeholder="Poster Image Link"
      value={eventData.poster || ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <input
      name="whatsapp_link"
      placeholder="Whatsapp Group Chat Link"
      value={eventData.whatsapp_link || ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <input
      name="duration"
      placeholder="Duration (minutes)"
      type="number"
      value={eventData.duration || ""}
      onChange={handleChange}
      required
      className="border p-2 rounded"
    />
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="visibility"
        checked={eventData.visibility ?? true}
        onChange={e => setEventData({ ...eventData, visibility: e.target.checked })}
      />
      Event Visibility
    </label>
    <button type="submit" className="bg-cyan-400 text-white font-semibold shadow-md hover:shadow-lg px-4 py-2 rounded hover:bg-cyan-500 transition">
      Update Event
    </button>
    {message && <div className="mt-2">{message}</div>}
  </form>
)}
    </div>
  );
}