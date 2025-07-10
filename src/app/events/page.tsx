"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import UpcomingEventsCarousel from "@/components/UpEventsCarousel";
import PastEventsList from "@/components/PastEventsList";
import AdminEventControls from "@/components/AdminEventControls";
import memory from "public/assets/memories/mem_event1.png";
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
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          setEvents(data.events || []);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Fetch registered events
  useEffect(() => {
    const fetchRegisteredEvents = async () => {
      try {
        const response = await fetch("/api/event-registration");
        if (response.ok) {
          const data = await response.json();
          const eventIds = (data.events || []).map((event: { event_id: number }) => event.event_id);
          setRegisteredEvents(eventIds);
        } else if (response.status === 401) {
          return;
        } else {
          console.error("Failed to fetch registered events");
        }
      } catch (error) {
        console.error("Error fetching registered events:", error);
      }
    };

    fetchRegisteredEvents();
  }, []);

  // Fetch admin status
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/user-profile");
        if (response.ok) {
          const data = await response.json();
          setIsAdmin(data.role === "admin" || data.role === "superadmin");
        } else if(response.status === 401) {
            return;
        } else {
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle event registration
  const handleRegister = async (event_id: number, event_name: string) => {
    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event_id, event_name }),
      });

      if (response.ok) {
        setRegisteredEvents((prev) => [...prev, event_id]);
        alert("Registration successful!");
      } else if(response.status === 401) {
        if (window.confirm("Not logged in..!! Please log in to register for events. Click OK to go to login.")) {
          router.push("/");
        }
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Registration failed. Please try again.");
    }
  };

  // Split events into upcoming and past
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = new Date();
    const upcoming = events
      .filter((event) => new Date(event.event_date) >= now && event.visibility)
      .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());
    
    const past = events
      .filter((event) => new Date(event.event_date) < now && event.visibility)
      .sort((a, b) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime());

    return { upcomingEvents: upcoming, pastEvents: past };
  }, [events]);

  if (loading) {
    return (
      <div className="bg-sky-50 min-h-screen">
        <div className="relative w-full h-65 md:h-56">
            <Image src={memory} alt="Events Memory" fill style={{ objectFit: "cover" }} className="z-0"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">All Events</h1>
            </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sky-50 min-h-screen">
      {/* Header */}
        <div className="relative w-full h-65 md:h-56">
            <Image src={memory} alt="Events Memory" fill style={{ objectFit: "cover" }} className="z-0"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">All Events</h1>
                <p className="text-white text-lg opacity-90">Discover and join our exciting events</p>
            </div>
        </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Upcoming Events Carousel */}
        {upcomingEvents.length > 0 && (
          <UpcomingEventsCarousel
            events={upcomingEvents}
            registeredEvents={registeredEvents}
            onRegister={handleRegister}
          />
        )}

        {/* Past Events Section with Admin Controls */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Past Events</h2>
            <p className="text-gray-600">
              Browse through our previous events and see what you might have missed
            </p>
          </div>

          {/* Admin Controls Component */
             isAdmin && <AdminEventControls events={events} /> 
          } 
        </div>

        {/* Past Events List */}
        <PastEventsList 
          events={pastEvents} 
          registeredEvents={registeredEvents} 
        />

        {/* No Events Message */}
        {events.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Available</h3>
            <p className="text-gray-600 mb-4">
              There are currently no events to display. Check back later for upcoming events!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}