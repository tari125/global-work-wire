import { NextResponse } from "next/server";

export async function GET() {
  try {
    // In production, fetch live RSS/JSON feeds from RemoteOK or WeWorkRemotely:
    // const res = await fetch("https://remoteok.com/api", { next: { revalidate: 3600 } });
    // const data = await res.json();

    const sampleFeed = {
      status: "success",
      source: "GlobalWorkWire RSS Automation Engine",
      lastSynchronized: new Date().toISOString(),
      channels: [
        { name: "WeWorkRemotely Tech Feed", active: true, frequency: "60 mins" },
        { name: "RemoteOK Global API", active: true, frequency: "30 mins" },
        { name: "AngelList / Wellfound RSS", active: true, frequency: "120 mins" },
      ],
      totalActivePositions: 42,
    };

    return NextResponse.json(sampleFeed);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch aggregated feeds" },
      { status: 500 }
    );
  }
}
