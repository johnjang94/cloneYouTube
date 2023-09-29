import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YouTubeAPIProvider } from "../../context/youtubeAPIcontext";
import { DarkModeProvider } from "../../context/darkmode";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <div className="px-3 md:px-12 py-3 bg-dark-background text-dark-text">
      <DarkModeProvider>
        <NavigationBar />
        <YouTubeAPIProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YouTubeAPIProvider>
      </DarkModeProvider>
    </div>
  );
}
