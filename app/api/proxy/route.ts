import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    // Get the 'url' query parameter
    const url = searchParams.get('url');

    // Validate the URL
    if (!url || typeof url !== "string") {
        return NextResponse.json({ error: "Missing or invalid URL" }, { status: 400 });
    }

    // Redirect to the image URL
    return NextResponse.redirect(url);
}
