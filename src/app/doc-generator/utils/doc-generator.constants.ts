import { PageOrientation } from 'docx';

// Configuración de la página para secciones apaisadas y verticales
export const landscapePage = {
  page: {
    size: {
      width: 15840, // Tamaño en puntos para orientación apaisada
      height: 12240, // Tamaño en puntos para orientación apaisada
    },
    margin: {
      top: 720,
      right: 720,
      bottom: 720,
      left: 720,
    },
    orientation: PageOrientation.LANDSCAPE,
  },
};

export const portraitPage = {
  page: {
    size: {
      width: 12240, // Tamaño en puntos para orientación vertical
      height: 15840, // Tamaño en puntos para orientación vertical
    },
    margin: {
      top: 720,
      right: 720,
      bottom: 720,
      left: 720,
    },
    orientation: PageOrientation.PORTRAIT,
  },
};
