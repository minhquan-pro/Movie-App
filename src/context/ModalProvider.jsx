import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const modalProvider = createContext();

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState("");
  const [titleVideo, setTitleVideo] = useState("");

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowing]);

  return (
    <div>
      <modalProvider.Provider
        value={{ setIsShowing, setContent, setTitleVideo }}
      >
        {children}
      </modalProvider.Provider>
      {isShowing && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80"
          onClick={() => setIsShowing(false)}
        >
          {content ? (
            <iframe
              src={`https://www.youtube.com/embed/${content}`}
              className="aspect-video w-[50vw]"
            ></iframe>
          ) : (
            <p className="flex h-[200px] items-center rounded-lg border px-5 text-[2vw] font-bold text-white">
              No video for {titleVideo}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ModalProvider;
