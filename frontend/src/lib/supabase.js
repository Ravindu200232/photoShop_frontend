import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vithtsgezrgobdyloldb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGh0c2dlenJnb2JkeWxvbGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTUzMzAsImV4cCI6MjA1NTUzMTMzMH0.NbKShjJ6vuO_1kaZ2nOYa1t1R3dUeN5msPpqKe2vRSE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);