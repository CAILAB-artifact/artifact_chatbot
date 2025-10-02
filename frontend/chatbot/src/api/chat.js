import API_BASE_URL from "./config";

export async function sendChatMessage({ userId, message, artifactId }) {
  const res = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, message, artifactId }),
  });

  if (!res.ok) {
    throw new Error(`Chat API 요청 실패 (status: ${res.status})`);
  }

  return res.json();
}
