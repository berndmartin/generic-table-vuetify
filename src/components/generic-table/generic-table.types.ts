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
  cellFormel?: string[][] | string[] | string | object;
}

export type GenericTableHeaders = GenericTableHeader[];

export interface GenericTableFooter {
  class?: string;
  text: string;
}

export enum GenericTableCellType {
  Action = 'action',
  Boolean = 'boolean',
  DateTime = 'date-time',
  Link = 'link',
  BtnLinkGroup = 'btn-link-group',
  FunctionTooltip = 'function-tooltip'
}

export enum GenericTableBodyAppendType {
  Sum = 'sum',
  Count = 'count'
}

export interface GenericTableBodyAppend {
  text: string;
  value: string;
  bodyType: GenericTableBodyAppendType;
  bodyFormel?: string[][] | string[] | string | object;
}

export type GenericTableBodyAppends = GenericTableBodyAppend[];
