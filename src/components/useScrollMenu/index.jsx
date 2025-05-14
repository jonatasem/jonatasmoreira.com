import { useState, useEffect } from "react";

export const useScrollMenu = () => {
  const [activeMenu, setActiveMenu] = useState("home"); // Inicialmente "home"

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Seções a serem monitoradas
      const scrollPos = window.scrollY; // Posição do scroll

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Posição do topo da seção
        const sectionHeight = section.offsetHeight; // Altura da seção

        // Verifica se o scroll está na seção atual
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const currentId = section.getAttribute("id"); // Obtém o id da seção
          setActiveMenu(currentId); // Atualiza o menu ativo
        }
      });
    };

    window.addEventListener("scroll", handleScroll); // Adiciona o listener de scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove o listener ao desmontar o componente
    };
  }, []);

  return [activeMenu, setActiveMenu]; // Retorna o estado e a função para atualizar
};
