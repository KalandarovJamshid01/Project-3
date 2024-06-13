import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime = 'edge'
export async function POST(request) {
if (request.method === 'POST') {
     const { DB } = getRequestContext().env;
     const data = await request.json();
     const { mail, title, short_description, long_description, contact, img_url } = data;
     const createdAt = new Date().toISOString();
     const query = `
       INSERT INTO connections (mail, title, short_description, long_description, contact, img_url, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
     `;
 
     await DATABASE.prepare(query).bind(mail, title, short_description, long_description, contact, img_url, createdAt).run();
 
return NextResponse()
  }}


