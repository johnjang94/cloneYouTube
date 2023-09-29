import React from "react";
import { useYouTubeAPI } from "../../context/youtubeAPIcontext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYouTubeAPI();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="flex py-4 items-center gap-2">
      {url && <img src={url} alt={name} className=" w-7 h-7 rounded-full" />}
      <p className="text-xl font-medium">{name}</p>
    </div>
  );
}
