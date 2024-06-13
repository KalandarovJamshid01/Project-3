import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";
export const runtime = 'edge'
export async function GET(request) {
if (request.method === 'GET') {
        return handleListImages(request)
    } else if (request.method === 'POST') {
      return handleCreateImage(request);
    }
    return new Response('Not Found', { status: 404 });
  }


async function handleListImages(req) {
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

  async function handleCreateItem(request, env) {
  try {
    const { DB } = getRequestContext().env;
    const data = await request.json();
    const { img_url, title, context, file_name, width, height, format, folder, bytes } = data;
    const createdAt = new Date().toISOString();
  
    await DB.prepare(
      `INSERT INTO images (img_url, title, context, file_name, width, height, format, folder, bytes, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(img_url, title, context, file_name, width, height, format, folder, bytes, createdAt).run();
  
    return NextResponse('Item created', { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  }