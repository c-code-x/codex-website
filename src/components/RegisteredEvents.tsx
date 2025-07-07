"use client";
import { useEffect, useState } from "react";

type Event = {
  event_id: string;
  event_name: string;
  event_date: string;
  venue: string;
  whatsapp_link: string;
};

export default function RegisteredEvents() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showingAll, setShowingAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/event-registration");
        const data = await res.json();
        const events = (data.events || [])
          .filter((event: any) => event.visibility === true)
          .map((event: any) => ({
            event_id: event.event_id,
            event_name: event.event_name,
            event_date: event.event_date,
            venue: event.venue,
            whatsapp_link: event.whatsapp_link,
          }));
        setAllEvents(events);
        setDisplayedEvents(events.slice(0, INITIAL_DISPLAY_COUNT));
      } catch (err) {
        console.error("Failed to load events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleLoadMore = () => {
    setDisplayedEvents(allEvents);
    setShowingAll(true);
  };

  const hasMoreToShow = !showingAll && allEvents.length > INITIAL_DISPLAY_COUNT;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading registered events...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!allEvents.length) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-gray-900 text-lg font-semibold mb-2">No Events Registered</h3>
            <p className="text-gray-600 text-sm">You haven't registered for any events yet.</p>
            <p className="text-gray-500 text-sm mt-1">Once you register for events, they'll appear here.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">Registered Events</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-200 to-transparent ml-4"></div>
          </div>
          <div className="bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
            {allEvents.length} {allEvents.length === 1 ? 'Event' : 'Events'}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left pb-4 text-gray-600 font-bold uppercase tracking-wider text-sm">
                  Event Name
                </th>
                <th className="text-left pb-4 text-gray-600 font-bold uppercase tracking-wider text-sm">
                  Date & Time
                </th>
                <th className="text-left pb-4 text-gray-600 font-bold uppercase tracking-wider text-sm">
                  Venue
                </th>
                <th className="text-left pb-4 text-gray-600 font-bold uppercase tracking-wider text-sm">
                  Chat Link
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedEvents.map((event, index) => (
                <tr key={event.event_id} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                  <td className="py-5 pr-6">
                    <div className="font-semibold text-gray-900 text-lg">{event.event_name}</div>
                  </td>
                  <td className="py-5 pr-6">
                    <div className="text-gray-700 font-medium">
                      {new Date(event.event_date).toLocaleString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </div>
                  </td>
                  <td className="py-5 pr-6">
                    <div className="text-gray-700 font-medium">{event.venue}</div>
                  </td>
                  <td className="py-5">
                    {event.whatsapp_link ? (
                      <a
                        href={event.whatsapp_link}
                        className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          if (!event.whatsapp_link.includes('whatsapp.com') && !event.whatsapp_link.includes('wa.me')) {
                            e.preventDefault();
                            alert("Invalid WhatsApp link format");
                          }
                        }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Join WhatsApp
                      </a>
                    ) : (
                      <span className="text-gray-400 italic font-medium">No link available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {displayedEvents.map((event) => (
            <div key={event.event_id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 text-lg mb-3">{event.event_name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    {new Date(event.event_date).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{event.venue}</span>
                </div>
              </div>
              <div className="mt-4">
                {event.whatsapp_link ? (
                  <a
                    href={event.whatsapp_link}
                    className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!event.whatsapp_link.includes('whatsapp.com') && !event.whatsapp_link.includes('wa.me')) {
                        e.preventDefault();
                        alert("Invalid WhatsApp link format");
                      }
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Join WhatsApp
                  </a>
                ) : (
                  <span className="text-gray-400 italic font-medium text-sm">No link available</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More/Show Less Buttons */}
        {hasMoreToShow && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md"
            >
              Load More ↓ ({allEvents.length - INITIAL_DISPLAY_COUNT} more events)
            </button>
          </div>
        )}

        {showingAll && allEvents.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-4">
            <button
              onClick={() => {
                setDisplayedEvents(allEvents.slice(0, INITIAL_DISPLAY_COUNT));
                setShowingAll(false);
              }}
              className="text-sky-500 hover:text-sky-600 font-semibold underline transition-colors"
            >
              Show Less ↑
            </button>
          </div>
        )}
      </div>
    </div>
  );
}