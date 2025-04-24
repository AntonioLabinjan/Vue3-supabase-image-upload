// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bespfaoxyouzoetgihxl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlc3BmYW94eW91em9ldGdpaHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTM5ODEsImV4cCI6MjA2MTA2OTk4MX0.auoAvbXdCvu00kz7mtmmYQdIoM_tt5LMqFwgERibwyc'

export const supabase = createClient(supabaseUrl, supabaseKey)
