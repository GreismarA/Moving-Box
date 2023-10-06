import gsap from "gsap";

const createErrorSvg = () => {
  // Crea el elemento SVG
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "30px");
  svgElement.setAttribute("height", "30px");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("fill", "#e75555");
  svgElement.setAttribute('class', 'errorOutlineSvg');

  // Crea el elemento 'g' dentro del SVG para el fondo
  const bgCarrierElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  bgCarrierElement.setAttribute("id", "SVGRepo_bgCarrier");
  bgCarrierElement.setAttribute("stroke-width", "0");

  // Crea el elemento 'g' dentro del SVG para los trazos
  const tracerCarrierElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  tracerCarrierElement.setAttribute("id", "SVGRepo_tracerCarrier");
  tracerCarrierElement.setAttribute("stroke-linecap", "rounded");
  tracerCarrierElement.setAttribute("stroke-linejoin", "rounded");

  // Crea el elemento 'g' dentro del SVG para el icono
  const iconCarrierElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  iconCarrierElement.setAttribute("id", "SVGRepo_iconCarrier");

  // Crea el elemento 'path' dentro del grupo 'g' de iconos
  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("fill", "none");
  pathElement.setAttribute("d", "M0 0h24v24H0z");

  // Crea el segundo elemento 'path' dentro del grupo 'g' de iconos
  const path2Element = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2Element.setAttribute("d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z");

  // Agrega los elementos al SVG
  iconCarrierElement.appendChild(pathElement);
  iconCarrierElement.appendChild(path2Element);
  svgElement.appendChild(bgCarrierElement);
  svgElement.appendChild(tracerCarrierElement);
  svgElement.appendChild(iconCarrierElement);

  return svgElement;
} 

const createCloseSvg = () => {
  // Crea el elemento SVG
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("class", "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3odgu4-MuiSvgIcon-root");
  svgElement.setAttribute("focusable", "false");
  svgElement.setAttribute("aria-hidden", "true");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("data-testid", "CloseRoundedIcon");

  // Crea el elemento "path" para el ícono
  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("d", "M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4");
  svgElement.appendChild(pathElement); 
  
  return svgElement;
} 

export const showPopupError = (message) => {
  const header = document.getElementById('modalHeader');
  if (header.childElementCount === 1) {
    const normalheader = document.getElementById('normalHeader');
    
    const errorWrapper = document.createElement('div');
    errorWrapper.className = 'popupError';
    
    const paragraph = document.createElement('p');
    paragraph.className = 'popupErrorParagraph'
    paragraph.innerText = message;
    
    header.appendChild(errorWrapper);
    
    const closeSvg = createCloseSvg();
    
    errorWrapper.appendChild(createErrorSvg());
    errorWrapper.appendChild(paragraph)
    errorWrapper.appendChild(closeSvg);
    
    let onAnimation = false;
    
    const playAnimation = () => {
      const animation = gsap.to(normalheader, {
        y: '+=150%',
        duration: 1,
        ease: 'power4.out',
        onStart: () => {
          playErrorAnimation();
        }
      });
      
      animation.play();
    }
    
    const playExitAnimation = () => {
      const animation = gsap.to(normalheader, {
        y: '-=150%',
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
        delay: 0.2,
      });

      animation.play();
    }
    
    const playErrorAnimation = () => {
      const animation = gsap.to(errorWrapper, {
        y: '+=110%',
        duration: 1,
        ease: 'bounce.out',
        delay: 0.1,
        onStart: () => {
          errorWrapper.classList.remove('animationClass');
          void errorWrapper.offsetWidth;
          errorWrapper.classList.add('animationClass');
          setTimeout(() => {
            if (header.contains(errorWrapper) && !onAnimation) {
              playErrorExitAnimation();
              playExitAnimation();
            } else {
              onAnimation = false;
            }
          }, 6000)
        }
      });
      
      animation.play();
    }
    
    const playErrorExitAnimation = () => {
      const animation = gsap.to(errorWrapper, {
        y: '-=110%',
        duration: 0.6,
        ease: 'power4.out',
        onComplete: () => {
          if (header.contains(errorWrapper)) {
            header.removeChild(errorWrapper);
          }
        }
      });
      
      animation.play();
    }
    
    const onClick = () => {
      playErrorExitAnimation();
      playExitAnimation();
      onAnimation = true;
    };
  
    closeSvg.addEventListener('click', onClick);
    
    playAnimation();
  }
};