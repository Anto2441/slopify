import { NextRequest, NextResponse } from "next/server";

const dataBaseCall = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  console.log("request.body", request.body);
  await dataBaseCall(2000);

  return NextResponse.json(null, { status: 200 });
}
