import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../../components/channel";
import OtherVideos from "../../components/related";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [isTabletSize, setIsTabletSize] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200 && window.innerWidth > 700) {
        setIsTabletSize(true);
      } else {
        setIsTabletSize(false);
      }

      if (window.innerWidth <= 700) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="md:flex md:flex-col lg:flex-row md:py-5 py-1">
      <article className="md:basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height={isTabletSize ? "400" : isMobileSize ? "300" : "600"}
          src={`http://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="rounded-2xl pr-2"
        />
        <div className="py-5">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className=" text-sm bg-dark-channel p-5 rounded-2xl font-sans mr-3 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            {open ? description : description.slice(0, 300)}
            <button
              onClick={toggle}
              className="float-right hover:text-lime-500"
            >
              {open ? "Read less" : "Read more"}
            </button>
          </div>
          <div>
            <p className="text-center text-xl py-5">
              Comments are limited for this video
            </p>
          </div>
        </div>
      </article>
      <section className="md:basis-2/6">
        <OtherVideos id={video.id} />
      </section>
    </section>
  );
}
