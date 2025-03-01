"use server"; // Enables Server Actions

export async function verifyKey(key: string) {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
  const API_URL = `https://discord.com/api/v10/channels/${CHANNEL_ID}/messages?limit=20`;

  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Authorization": `${BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch messages from Discord");
  }

  const messages = await res.json();

  // Find the message where the content (private key) matches the given key
  const matchingMessage = messages.find((msg: any) =>
    msg.attachments.some((attachment: any) => attachment.content_type?.startsWith("image")) &&
    msg.content.trim() === key // Check if message content matches provided key
  );

  if (!matchingMessage) {
    return { success: false, message: "No matching private key found." };
  }
  console.log("da");
  
  return {
    success: true,
    message: "Private key matched successfully.",
    imageUrl: matchingMessage.attachments[0].url, // Return image URL of matching key
  };
}
