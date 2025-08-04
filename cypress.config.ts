import { defineConfig } from "cypress";
import { Pool } from "pg";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  projectId: 'vf9emm',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Create a new pool for Cypress tasks.
      const pool = new Pool({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: 5432,
        ssl: { rejectUnauthorized: false },
      });

      on("task", {
        // Task to seed a user and an event for our tests
        async seedTestUserAndEvent() {
          console.log("Seeding test data...");
          const regularUserEmail = 'test.user@example.com';
          const adminUserEmail = 'admin.user@example.com';
          const eventId = '1daa3138-f741-40c2-8020-adffae06af96';
          const regularUserId = 'c8d4c3c0-1b7a-4b3e-8e4f-3b7c1b1b1b1b';
          const adminUserId = 'a9b8c7d6-5e4f-3a2b-1c0d-9e8f7a6b5c4d'; // New fixed UUID for admin

          // Clean up old data first
          await pool.query("DELETE FROM registrations WHERE user_id IN ($1, $2)", [regularUserId, adminUserId]);
          await pool.query("DELETE FROM users WHERE user_id IN ($1, $2)", [regularUserId, adminUserId]);
          await pool.query("DELETE FROM events WHERE event_id = $1", [eventId]);

          // Insert test users
          await pool.query(
            "INSERT INTO users (user_id, user_email, user_name, role) VALUES ($1, $2, $3, $4)",
            [regularUserId, regularUserEmail, 'Test User', 'normaluser']
          );
          await pool.query(
            "INSERT INTO users (user_id, user_email, user_name, role) VALUES ($1, $2, $3, $4)",
            [adminUserId, adminUserEmail, 'Admin User', 'admin']
          );

          // Insert test event
          await pool.query(
            "INSERT INTO events (event_id, event_name, event_date) VALUES ($1, $2, $3)",
            [eventId, 'Test Event', new Date()]
          );

          return { eventId }; // Return the eventId to the test
        },
        // Task to clean up registrations for a specific user
        async cleanUserRegistrations(userEmail: string) {
           console.log(`Cleaning registrations for ${userEmail}...`);
           const userRes = await pool.query("SELECT user_id FROM users WHERE user_email = $1", [userEmail]);
           if (userRes.rows[0]) {
             await pool.query("DELETE FROM registrations WHERE user_id = $1", [userRes.rows[0].user_id]);
           }
           console.log("Cleaning complete.");
           return null;
        },
        // Task to clean up registrations for a specific user
        async cleanTestEvent(eventId: string) {
           console.log(`Cleaning registrations for event ${eventId}...`);
           await pool.query("DELETE FROM events WHERE event_id = $1", [eventId]);
           console.log("Cleaning complete.");
           return null;
        }
      });
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});
