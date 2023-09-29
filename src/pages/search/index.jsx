import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../../components/video-card";
import { useYouTubeAPI } from "../../context/youtubeAPIcontext";

export default function SearchVideos() {
  const { keyword } = useParams();
  const { youtube } = useYouTubeAPI();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery([["videos", keyword]], () => youtube.search(keyword));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error: {error.message}</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
