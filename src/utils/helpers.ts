export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const currentScroll = window.scrollY;
    const elementTop = element.getBoundingClientRect().top;
    const targetScroll = currentScroll + elementTop - 100; 
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  }
};