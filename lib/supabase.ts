import { createClient } from "@supabase/supabase-js";

/*
  Run this SQL in your Supabase project's SQL editor to create the required tables:

  create table contact_submissions (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    contributor_type text not null,
    message text not null,
    created_at timestamptz default now()
  );

  create table get_involved_submissions (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    role text not null,
    linkedin text not null,
    objective text not null,
    created_at timestamptz default now()
  );

  create table newsletter_subscriptions (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    created_at timestamptz default now()
  );
*/

const supabaseUrl = process.env.SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseKey);
