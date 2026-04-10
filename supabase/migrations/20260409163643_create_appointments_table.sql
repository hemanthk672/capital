/*
  # Create Appointments Table for Look Me The Family Spa & Hair

  ## Summary
  Creates the appointments table to store customer booking requests from the salon website.

  ## New Tables
  - `appointments`
    - `id` (uuid, primary key) - Unique appointment identifier
    - `name` (text, not null) - Customer full name
    - `phone` (text, not null) - Customer contact number
    - `service` (text, not null) - Selected service (haircut, facial, etc.)
    - `appointment_date` (date, not null) - Requested appointment date
    - `appointment_time` (text, not null) - Requested appointment time slot
    - `message` (text) - Optional additional notes from customer
    - `status` (text) - Booking status: pending, confirmed, completed, cancelled
    - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - RLS enabled on appointments table
  - Public INSERT allowed so customers can book without login
  - No SELECT policy for public (admin access only via service role)

  ## Notes
  1. Status defaults to 'pending' for all new bookings
  2. Public users can only insert; they cannot read/update/delete records
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book an appointment"
  ON appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
