import {
  GenericTableBodyAppends,
  GenericTableFooter,
  GenericTableHeaders,
  GenericTableOptions,
  GenericTablePagination,
} from '@/components/generic-table/generic-table.types';

export interface GenericTable {
  headers: GenericTableHeaders;
  options: GenericTableOptions;
  pagination?: GenericTablePagination;
  groupedItems?: Record<string, any[]>;
  updateOptions?: (obj: any) => void;
  sort?: (value: string) => void;
  group?: (value: string) => void;
  bodyAppends?: GenericTableBodyAppends;
  footer?: GenericTableFooter;
}
