export const useScrollTo = () => {
  const scrollToElement = (elementId, options = {}) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: options.behavior || 'smooth',
        block: options.block || 'start',
        inline: options.inline || 'nearest'
      });
    }
  };

  const scrollToTop = (options = {}) => {
    window.scrollTo({
      top: 0,
      behavior: options.behavior || 'smooth'
    });
  };

  return { scrollToElement, scrollToTop };
}; 