import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime = 'edge'
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page'), 10) || 1;
    const pageSize = parseInt(searchParams.get('pageSize'), 10) || 10;
    const offset = (page - 1) * pageSize;


    const { DB } = getRequestContext().env;


    const response = await DB.prepare(
      `SELECT * FROM images WHERE folder="my_website_images" ORDER BY created_at DESC LIMIT ? OFFSET ?`
    )
      .bind(pageSize, offset)
      .all();


    return NextResponse.json(response.results);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
