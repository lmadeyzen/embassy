interface Params {
  baseUrl: string;
  appId: string;
  conversationId: string;
  token: string;
  text: string;
}

export const postMessage = ({
  baseUrl,
  appId,
  conversationId,
  text,
  token,
}: Params) => {
  fetch(
    `${baseUrl}/v2/apps/${appId}/conversations/${conversationId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: {
          type: "business",
          displayName: "Pikachu",
          avatarUrl:
            "https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851",
        },

        content: {
          type: "text",
          text: text,
        },
        metadata: {
          lang: "en-ca",
        },
      }),
    }
  );
};
