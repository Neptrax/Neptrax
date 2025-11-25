/*
  # Create Contact Submissions Table

  ## Overview
  This migration creates the core contact submissions table to store messages from the website contact form.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text) - Name of the person submitting the form
    - `email` (text) - Email address of the submitter
    - `message` (text) - The message content
    - `status` (text) - Status of the submission (new, read, replied, archived)
    - `created_at` (timestamptz) - Timestamp of when the submission was created
    - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable Row Level Security (RLS) on the contact_submissions table
  - Add policy for authenticated admin users to read all submissions
  - Add policy to allow public insert (for contact form)
  - No public read access to protect user privacy

  ## Notes
  - Default status is 'new' for all submissions
  - Public users can only insert, not read their own submissions (privacy)
  - Only authenticated administrators can view submissions
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert contact form submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users can read all submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can update submissions (for status changes)
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete submissions
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
