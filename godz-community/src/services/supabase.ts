import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 