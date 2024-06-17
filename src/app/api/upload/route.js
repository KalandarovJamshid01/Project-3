// import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';
export const runtime = 'edge';


export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const CLOUDINARY_API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET; // Use environment variable for API secret
    const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY; // Use environment variable for API key
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Use environment variable for Cloud name

    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${file.name}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;

    const signature = CryptoJS.SHA1(paramsToSign).toString();
    // Append the Blob to the FormData object
    formData.append('file', file);
    formData.append('public_id', file.name);
    formData.append('signature', signature);
    formData.append('api_key', CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const result=await response.json()

    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
