import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export async function POST(request) {
  try {
    console.log(request)
    const { DB } = getRequestContext().env;
    const data = await request.json();
    const { mail, title, short_description, long_description, contact, img_url, img_id } = data;
    const createdAt = new Date().toISOString();
    // console.log(mail, title, short_description, long_description, contact, img_url, img_id ,created_at)
    const query = `
      INSERT INTO connections (mail, title, short_description, long_description, contact, img_url, img_id, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await DB.prepare(query).bind(mail, title, short_description, long_description, contact, img_url, img_id, createdAt).run();
    console.log('Insert result:', result);

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
