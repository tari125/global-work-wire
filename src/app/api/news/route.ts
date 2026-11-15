import { NextResponse } from "next/server";

export async function GET() {
  try {
    const newsFeed = {
      status: "success",
      source: "GlobalWorkWire Tech & AI Wire",
      lastSynchronized: new Date().toISOString(),
      feeds: [
        { source: "TechCrunch AI", active: true },
        { source: "Hacker News Wire", active: true },
        { source: "Ars Technica Enterprise", active: true },
      ],
      articlesFetched: 15,
    };

    return NextResponse.json(newsFeed);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tech news feed" },
      { status: 500 }
    );
  }
}
