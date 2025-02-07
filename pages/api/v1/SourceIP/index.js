export default async function sourceIP(request, response) {
  if (request.method === "GET") {
    // Obtém o IP do cliente
    const clientIP =
      request.headers["x-forwarded-for"] || request.connection.remoteAddress;

    return response.status(200).json({ ip: clientIP });
  }

  return response.status(405).json({ error: "Method Not Allowed" });
}
