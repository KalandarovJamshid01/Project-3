import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export async function POST(request) {
  try {
    const { DB } = getRequestContext().env;
    const data = await request.json();
    const { img_url, title, context, file_name, width, height, format, folder, bytes } = data;
    const createdAt = new Date().toISOString();

    console.log("Received data:", data);

    const insertQuery = `
      INSERT INTO images (img_url, title, context, file_name, width, height, format, folder, bytes, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await DB.prepare(insertQuery)
      .bind(img_url, title, context, file_name, width, height, format, folder, bytes, createdAt)
      .run();

    const new_data=await DB.prepare("SELECT * FROM images ORDER BY created_at Limit 1").bind().first();

    // Return the inserted data for verification
    return NextResponse.json({ status: "Success", data: new_data }, { status: 200 });
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
