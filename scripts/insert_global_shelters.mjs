import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Parse .env.local to get Supabase credentials
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) {
        env[key.trim()] = values.join('=').trim().replace(/^"|"$/g, '');
    }
});

const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase credentials in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const shelters = [
    {
        name: "Tokyo Animal Rescue",
        location: "Tokyo, Japan",
        contact_info: "+81 3-1234-5678",
        website_url: "https://tokyoanimalrescue.example.jp",
        capacity: 150,
        country_code: "JP"
    },
    {
        name: "Osaka Stray Friends",
        location: "Osaka, Japan",
        contact_info: "+81 6-8765-4321",
        capacity: 80,
        country_code: "JP"
    },
    {
        name: "Bucharest Stray Dogs",
        location: "Bucharest, Romania",
        contact_info: "+40 21 123 4567",
        website_url: "https://buchareststrays.example.ro",
        capacity: 300,
        country_code: "RO"
    },
    {
        name: "Cluj Animal Protection",
        location: "Cluj-Napoca, Romania",
        contact_info: "+40 264 987 654",
        capacity: 120,
        country_code: "RO"
    },
    {
        name: "Seoul Animal Care Center",
        location: "Seoul, South Korea",
        contact_info: "02-1234-5678",
        website_url: "https://seoulanimal.example.kr",
        capacity: 250,
        country_code: "KR"
    }
];

async function insertData() {
    console.log("Inserting sample shelters...");
    const { data, error } = await supabase.from('shelters').insert(shelters).select();

    if (error) {
        console.error("Error inserting data:", error);
    } else {
        console.log("Successfully inserted data:", data);
    }
}

insertData();
