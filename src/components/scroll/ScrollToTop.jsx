import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleScrollTop = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTop);
    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "active" : ""}`}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FaArrowUp className="icon" />
    </a>
  );
};

export default ScrollToTop;
