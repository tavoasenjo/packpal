const ScrollToTopButton = ({ scrollRef }) => {
  const scrollToTop = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return <button onClick={scrollToTop}>Scroll to Top</button>;
};

export default ScrollToTopButton;
