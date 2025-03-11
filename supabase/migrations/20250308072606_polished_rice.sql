/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `company` (text)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);