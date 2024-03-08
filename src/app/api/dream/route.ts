import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
    const { imageUrl, theme, room  } = await req.json();

    const output = await replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            image: imageUrl,
            //prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
            prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed Preserves the structures of the walls and doors from the original image. You can apply artistic styles or visual filters, but make sure to preserve the shapes and features of the existing walls and doors in the image. The goal is to create a creative and stylized representation that still maintains the overall layout of the architectural structures present in the original image`

          }
        }
      );
      return NextResponse.json(output);
}