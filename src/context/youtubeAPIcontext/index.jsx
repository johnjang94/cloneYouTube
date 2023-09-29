import { createContext, useContext } from "react";
import YouTube from "../../api/youtube";
import FakeYouTubeClient from "../../api/fakeclient";
import YouTubeClient from "../../api/youtubeclient";

export const YouTubeAPIContext = createContext();

// const client = new FakeYouTubeClient();
const client = new YouTubeClient();
const youtube = new YouTube(client);
export function YouTubeAPIProvider({ children }) {
  return (
    <YouTubeAPIContext.Provider value={{ youtube }}>
      {children}
    </YouTubeAPIContext.Provider>
  );
}

export function useYouTubeAPI() {
  return useContext(YouTubeAPIContext);
}
