// Supabase client — replace SUPABASE_ANON_KEY with the anon/public key from
// Supabase Dashboard → Project Settings → API
// TODO: replace with environment variable or server-side config before going live

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL      = 'https://tngclmwzaeolvvefgptq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZ2NsbXd6YWVvbHZ2ZWZncHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyODA1MjcsImV4cCI6MjA5MTg1NjUyN30.ouD9IYVaWx1CYerl-s1KuFIHx9WD0_ZsMoUuaJUnRwY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
