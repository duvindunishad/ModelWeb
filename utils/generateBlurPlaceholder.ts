import sharp from 'sharp';
import type { ImageProps } from './types';

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl( image: ImageProps) : Promise<string> {
    let url = cache.get(image);
    if (url) {
      return url;
    }
  
    // Fetch the image from Cloudinary
    const response = await fetch(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_20/${image.public_id}.${image.format}`);
  
    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
  
    // Convert the response to a buffer
    const imageArrayBuffer = await response.arrayBuffer();
  
    const imageBuffer = Buffer.from(imageArrayBuffer);
    
    // Process the image using sharp
    const buffer = await sharp(imageBuffer)
      .jpeg({
        quality: 80, // Set the desired quality level (0-100)
      })
      .toBuffer();
  
    // Create the Base64-encoded URL
    url = `data:image/jpeg;base64,${buffer.toString('base64')}`;
  
    // Cache the URL
    cache.set(image, url);
  
    return url;
}