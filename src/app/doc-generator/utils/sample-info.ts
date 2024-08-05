import {
  DocInterface,
  DocPageAlignment,
  DocSectionKind,
} from './doc-info.interface';

export const sampleInfoDoc: DocInterface = {
  titulo: 'titulo',
  pages: [
    {
      index: 0,
      alignamet: DocPageAlignment.Horizontal,
      title: 'Propuesta de Venta',
      sections: [
        {
          index: 0,
          kind: DocSectionKind.Parrafo,
          content: 'Parrafo de prueba',
        },
        {
          index: 1,
          kind: DocSectionKind.Parrafo,
          content: 'Parrafo de prueba 2',
        },
      ],
    },
    {
      index: 1,
      alignamet: DocPageAlignment.Vertical,
      title: 'Propuesta de Venta',
      sections: [
        {
          index: 0,
          kind: DocSectionKind.Parrafo,
          content: 'Parrafo de prueba',
        },
        {
          index: 1,
          kind: DocSectionKind.Parrafo,
          content: 'Parrafo de prueba 2',
        },
      ],
    },
  ],
};

export const sampleInfoTemplate: any = {
  // Cabecera propuesta de venta
  idOferta: '90498913',
  fechaOferta: '06/06/2024',
  id: '7534962',
  promo: 'R14401-01',
  servicer: 'Haya',
  dt: 'DT Centro',

  // Resumen de la propuesta

  idCliente: '853123',
  direccion: 'Calle LABASTIDA, nº 14',
  municipio: '',
  provincia: 'Madrid',
  cp: '028034',
  socPropietaria: 'BBVA SA',
  estadoDisp: 'Disponible para la venta con oferta',
  dispComercial: 'Disponible',
  fcDispComercial: '',
  responsableComercial: 'Alonso Rodriguez, Leticia',
  dispAdministrativo: '',
  dispTecnico: '',
  motivoTecnico: '',
  delegacion: 'NO',
  // TODO: falta la tabla de desglose de la oferta
  // TODO: falta la imagen de la columna venta

  //Resumen económico
  numActivos: 1,
  oferta: '705.000,00 €',
  precioMinimo: '705.200 €',
  pvp: '705.200 €',
  difsPVP: '0.03 %',
  comisionHaya: '28.200 €',
  VNC: '',
  tasacion: '1.183.853,24 €',
  fcTasacion: '15/03/2023',
  nivelSancion: '',

  // Identificación del Comprador Principal y Oferta
  nombreRazonSocial: 'San Matias Invest, S.L.',
  cfiNif: 'B44861672',
  finAdquisicion: null,
  formaPago: 'Contado',
  porcentajeFinanciacion: '',
  tipoFinanciacion: '',
  prescriptor: 'HAYA REAL ESTATE S.L.U.',
  telefono: '',
  email: 'noreply@haya.es',
  oficinaCliente: '',
  numOficina: '',
  // tributación
  tipoImpuesto: 'IVA',
  tipoAplicable: '21.0',
  operacionExenta: 'No',
  invSujetoPasivo: 'No',
  renunciaExencion: 'No',

  // comercializacion
  publicado: 'Si',
  fechaUltimaPublicacion: '02/04/2024',
  evento: 'No',
  ultimaTarifa: '705.200',
  fechaUltimaTarifa: '10/01/2024',
  fechaMejorOfertaRecibida: '06/06/2024',
  mejorOfertaRecibida: '705.000 €',
  diasPublicado: 65,
  diasPrecio: 148,
  fechaPrimeraPublicacion: '02/04/2024',
};
