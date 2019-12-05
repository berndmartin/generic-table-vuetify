export interface GenericTablePagination {
  page?: number;
  itemsPerPage?: number;
  pageStart?: number;
  pageStop?: number;
  pageCount?: number;
  itemsLength?: number;
}

export interface GenericTableOptions {
  sortBy: string[];
  sortDesc: boolean[];
  page?: number;
  itemsPerPage?: number;
  groupBy?: string[];
  groupDesc?: boolean[];
  multiSort?: boolean;
  mustSort?: boolean;
  hideDefaultHeader?: boolean;
  title?: string;
}

export interface GenericTableHeader {
  text: string;
  value: string;
  description?: string;
  align?: string;
  sortable?: boolean;
  class?: string[] | string;
  width?: string;
  cellType?: GenericTableCellType;
  cellFormula?: string[][] | string[] | string | object;
}

export type GenericTableHeaders = GenericTableHeader[];

export interface GenericTableFooter {
  class?: string;
  text: string;
}

export enum GenericTableCellType {
  Action = 'action',
  Boolean = 'boolean',
  Link = 'link'
}

export enum GenericTableBodyAppendType {
  Sum = 'sum',
  Count = 'count'
}

export interface GenericTableBodyAppend {
  text: string;
  value: string;
  bodyType: GenericTableBodyAppendType;
  bodyFormula?: string[][] | string[] | string | object;
}

export type GenericTableBodyAppends = GenericTableBodyAppend[];
