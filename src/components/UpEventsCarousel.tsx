import { useState } from "react";
import Image from "next/image";

interface Event {
  event_id: number;
  event_name: string;
  event_date: string;
  duration: number;
  venue: string;
  poster: string;
  visibility: boolean;
  event_description: string;
  participants: number;
  isRegistered?: boolean;
  isPast?: boolean;
}

export default function UpcomingEventsCarousel({
  events,
  registeredEvents,
  onRegister,
}: {
  events: Event[];
  registeredEvents: number[];
  onRegister: (event_id: number, event_name: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!events.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-8">
        <p className="text-gray-600">No upcoming events found.</p>
      </div>
    );
  }

  const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % events.length); };
  const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + events.length) % events.length); }; 

  const currentEvent = events[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
      {/* header */}
      <div className="bg-sky-500 text-white text-center py-3">
        <h2 className="text-lg font-semibold">Upcoming Event</h2>
      </div>

      {/* main info */}
      <div className="relative p-6">
        {/* nav arrows */}
        {events.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* event content */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* event poster */}
          <div className="flex-shrink-0">
            <Image
              src={currentEvent.poster}
              alt={currentEvent.event_name}
              width={300}
              height={200}
              className="w-full lg:w-80 h-80 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "/no-image.png";
              }}
            />
          </div>

          {/* event details */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {currentEvent.event_name}
            </h3>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(currentEvent.event_date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              |{" "}
              {new Date(currentEvent.event_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              - {currentEvent.duration} min
            </div>
            <div className="text-sm text-gray-700 mb-4">
              Venue: {currentEvent.venue}
            </div>
            <p className="text-sm/6 text-gray-800 mb-4 line-clamp-3 italic">
              " {currentEvent.event_description} "
            </p>

            {/* Registration Button */}
            {registeredEvents.includes(currentEvent.event_id) ? (
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Registered
              </span>
            ) : (
              <button
                className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition-colors font-semibold"
                onClick={() => onRegister(currentEvent.event_id, currentEvent.event_name)}
              >
                Register Now
              </button>
            )}
          </div>
        </div>

        {/* Pagination Dots */}
        {events.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-cyan-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}