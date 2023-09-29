import React from "react";
import { formatAgo } from "../../utility/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={
        isList
          ? "flex pb-3 px-2"
          : "pb-3 px-2 hover:box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className={
          isList
            ? "w-60 mr-4 cursor-pointer rounded-xl"
            : "w-full cursor-pointer rounded-xl"
        }
      />
      <div>
        <p className="text-semibold cursor-pointer">{title}</p>
        <p className="text-sm opacity-80 cursor-pointer">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
