import { useState } from "react";
import Image from "next/image";

interface Event {
  event_id: string;
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

export default function PastEventCard({
  event,
  isRegistered = false,
}: {
  event: Event;
  isRegistered?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Event Image */}
        <div className="flex-shrink-0">
          <Image
            src={event.poster}
            alt={event.event_name}
            width={120}
            height={80}
            className="w-full md:w-30 h-30 object-cover rounded-md"
            onError={(e) => {
              e.currentTarget.src = "/no-image.png";
            }}
          />
        </div>

        {/* Event Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 mb-3 md:mb-0">
              <h3 className="font-semibold text-gray-900 mb-1 text-base">
                {event.event_name}
              </h3>
              <div className="text-sm text-gray-600 mb-1">
                {formatDate(event.event_date)} | {formatTime(event.event_date)} - {event.duration} hrs
              </div>
              <div className="text-sm text-gray-600">
                Participants: {event.participants}+
              </div>
              {isRegistered && (
                <div className="mt-2">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Attended
                  </span>
                </div>
              )}
            </div>

            {/* Know More Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                isExpanded
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-custom-gradient opacity-75 text-white hover:bg-cyan-100"
              }`}
            >
              {isExpanded ? "Hide Details" : "Know More"}
            </button>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-md p-3">
                <p className="text-sm text-gray-700 mb-1 font-semibold">Event Description:</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {event.event_description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}