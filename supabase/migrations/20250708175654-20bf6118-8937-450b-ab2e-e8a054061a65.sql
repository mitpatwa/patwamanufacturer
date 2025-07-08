
-- Create inquiries table to store form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  location TEXT NOT NULL,
  project_type TEXT NOT NULL,
  description TEXT NOT NULL,
  timeline TEXT NOT NULL,
  quantity TEXT,
  special_requirements TEXT,
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public form)
CREATE POLICY "Anyone can submit inquiries" 
  ON public.inquiries 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading inquiries (you may want to restrict this later)
CREATE POLICY "Anyone can view inquiries" 
  ON public.inquiries 
  FOR SELECT 
  USING (true);
