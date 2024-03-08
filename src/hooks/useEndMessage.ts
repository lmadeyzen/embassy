import { encode } from "js-base64";
import { postMessage } from "../utils/postMessage";
import { useAppSelector } from "../redux/hooks";

export const useEndMessage = () => {
  const query = useAppSelector((state) => state.query.queries);
  const SECRET =
    "9lWH_uqIdAI748azQCBndlIVwX6agWSgFJOeUzFQzflKd-qnPNjXXnHdzFhdhGSMJKq1OPgaj-OSbLPdG0CX1Q"; //hardcoded
  const KEY_ID = "app_65cc9b3b8c9332d6d82dabde"; //hardcoded
  const baseUrl = "https://api.smooch.io"; //hardcoded
  const token = `Basic ${encode(`${KEY_ID}:${SECRET}`)}`;

  return (text: string) => {
    postMessage({
      baseUrl,
      appId: query.appId,
      conversationId: query.conversationId,
      token,
      text: text,
    });
    window.WebviewSdk.close();
  };
};
