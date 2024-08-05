export enum DocSectionKind {
  Parrafo = 'Parrafo',
  nada = 'nada',
}
export enum DocPageAlignment {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export interface DocSection {
  index: number;
  kind: DocSectionKind;
  content: string;
}

export interface DocPages {
  index: number;
  alignamet: DocPageAlignment | DocPageAlignment.Vertical;
  title: string;
  sections?: Array<DocSection>;
}

export interface DocInterface {
  titulo: string;
  pages?: Array<DocPages>;
}
