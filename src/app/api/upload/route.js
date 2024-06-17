// import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
export const runtime = 'edge';
import CryptoJS from 'crypto-js';
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
// });

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const CLOUDINARY_API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET; // Use environment variable for API secret
    const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY; // Use environment variable for API key
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Use environment variable for Cloud name

    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;

    const signature = CryptoJS.SHA1(paramsToSign).toString();
    // Append the Blob to the FormData object
    formData.append('file', file);
    formData.append('public_id', `contactImage`);
    formData.append('signature', signature);
    formData.append('api_key', CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp);
    console.log(formData);
    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    // const result = await new Promise((resolve, reject) => {
    //   const uploadStream = cloudinary.uploader.upload_stream(
    //     {
    //       folder: "contact_images",
    //       tags: ["website_image", "example"],
    //       context: "alt=Contact Image|caption=Caption",
    //     },
    //     (error, result) => {
    //       if (error) {
    //         reject(error);
    //       } else {
    //         resolve(result);
    //       }
    //     }
    //   );

    //   uploadStream.end(buffer);
    // });
    if (!result.result) {
      return NextResponse.json(
        { message: "File wasn't uploaded" },
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    console.log('Route data', result);

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
