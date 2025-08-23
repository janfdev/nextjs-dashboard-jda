export async function GET(request: Request) {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  return new Response(
    JSON.stringify({
      success: true,
      data: users
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function POST(request: Request) {
  // parse the request body
  const body = await request.json();
  const { name } = body;

  // e.g Insert new user into your DB
  const newUser = { id: Date.now(), name };

  return new Response(
    JSON.stringify({
      success: true,
      message: "User created successfully",
      data: newUser
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
