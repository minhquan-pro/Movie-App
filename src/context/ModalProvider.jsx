import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const modalProvider = createContext();

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [idContent, setIdContent] = useState("");
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
        value={{ setIsShowing, setIdContent, setTitleVideo }}
      >
        {children}
      </modalProvider.Provider>
      {isShowing && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80"
          onClick={() => setIsShowing(false)}
        >
          {idContent ? (
            <iframe
              src={`https://www.youtube.com/embed/${idContent}`}
              className="aspect-video w-[50vw]"
            ></iframe>
          ) : (
            <p className="flex h-[200px] items-center rounded-lg border bg-white/60 px-5 text-[2vw] font-bold shadow-lg">
              No video for {titleVideo}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ModalProvider;
