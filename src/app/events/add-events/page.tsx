"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEventPage() {
  const [form, setForm] = useState({
    event_name: "",
    event_date: "",
    event_description: "",
    poster: "",
    whatsapp_link: "",
    duration: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // FIX: Removed the "action" property and send a clean request body
        body: JSON.stringify({
          ...form,
          duration: Number(form.duration), // Ensure duration is a number
        }),
      });

      if (res.ok) {
        setMessage("Event added successfully!");
        setTimeout(() => router.push("/events"), 1500);
      } else {
        // FIX: Provide more specific error feedback from the API
        const errorData = await res.json();
        setMessage(`Failed to add event: ${errorData.error || res.statusText}`);
      }
    } catch (error) {
      console.error("Add event error:", error);
      setMessage("An error occurred while adding the event.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Event</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="event_name"
          placeholder="Event Name"
          value={form.event_name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="event_date"
          type="datetime-local"
          value={form.event_date}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        {/* IMPROVEMENT: Use a textarea for the description */}
        <textarea
          name="event_description"
          placeholder="Event Description"
          value={form.event_description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          rows={4}
        />
        <input
          name="poster"
          placeholder="Poster Image Link (e.g., /posters/my-event.png)"
          value={form.poster}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="whatsapp_link"
          placeholder="WhatsApp Group Chat Link"
          value={form.whatsapp_link}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="duration"
          placeholder="Duration (minutes)"
          type="number"
          value={form.duration}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-cyan-400 text-white font-semibold shadow-md hover:shadow-lg px-4 py-2 rounded hover:bg-cyan-500 transition">
          Add Event
        </button>
        {message && <div className="mt-2 text-center">{message}</div>}
      </form>
    </div>
  );
}