import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  return new Response(
    JSON.stringify({ success: true, result: `You searched for: ${query}` }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
