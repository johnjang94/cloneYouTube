import React from "react";
import { useYouTubeAPI } from "../../context/youtubeAPIcontext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../video-card";

export default function OtherVideos({ id }) {
  const { youtube } = useYouTubeAPI();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.otherVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error: {error.message}</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
