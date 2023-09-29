import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../../components/video-card";

export default function Home() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery([["videos", keyword]], async () => {
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`).then((res) =>
      res.json().then((data) => data.items)
    );
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {keyword ? `🔍${keyword}` : "trend🔥"}
      {isLoading && <p>Loading...</p>}
      {error && <p>it has not been successful 😭</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
