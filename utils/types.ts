import { StaticImageData } from "next/image";

// types.ts
export interface ImageData {
    id: string;
    modelImage: StaticImageData;
    modelName: string;
    photographerName: string;
    imageCount?: number;
    photographerId: string;
}

export interface ImageProps {
    id: number;
    height: number;
    width: number;
    public_id: string;
    format: string;
    blurDataUrl?: string;
}