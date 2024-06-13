import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime = 'edge'
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page'), 10) || 1;
    const pageSize = parseInt(searchParams.get('pageSize'), 10) || 10;
    const offset = (page - 1) * pageSize;

    console.log("Page:", page);
    console.log("PageSize:", pageSize);
    console.log("Offset:", offset);

    const { DB } = getRequestContext().env;

    console.log("Database context:", DB);

    const response = await DB.prepare(
      `SELECT * FROM images WHERE folder="my_website_images" ORDER BY created_at DESC LIMIT ? OFFSET ?`
    )
      .bind(pageSize, offset)
      .all();

    console.log("Database response:", response);

    return NextResponse.json(response.results);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
