import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

// Collection of different pages
import Root from "./pages/root";
// import Home from "./pages/home";
import SearchVideos from "./pages/search";
import VideoDetail from "./pages/video-detail";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <SearchVideos /> },
      { path: "/videos", element: <SearchVideos /> },
      { path: "/videos/:keyword", element: <SearchVideos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
