export * from './dataSource/comparers';
export * from './dataSource/data-filters';
import { Comparer } from './dataSource/comparers';
import { Operations, Logics } from './enums';
export { Operations, Logics } from './enums';

export type ChangeFQLHander<Tobj> = (fql: FilterQueryLanguage<Tobj>) => void;
export type RemoveFilterHandler<Tobj> = (field: FilterQueryField<Tobj>) => void;
export type GetDefaultFilterQueryHandler<Tobj> = (field: FilterQueryField<Tobj>) => FilterQuery<Tobj>;

export type FilterUpdateHandler<Tobj> = (filterQuery: FilterQuery<Tobj>) => void;
export type FilterItemValue<Tobj> = (Tobj[keyof Tobj] | unknown);

export interface FilterItem<Tobj> {
  operation: Operations,
  value: FilterItemValue<Tobj>,
}

export type FilterQueryField<Tobj> = (keyof Tobj) | string | (keyof Tobj)[] | string[];

export type FilterMapper<Tobj> = Partial<{ [Key: string]: Comparer<any> }> |
  Partial<{ [Key in keyof Tobj]: Comparer<any> }>;

export interface FilterQuery<Tobj> {
  logic: Logics,
  field: FilterQueryField<Tobj>,
  filterItems: FilterItem<Tobj>[],
}

export interface FilterQueryLanguage<Tobj> {
  logic: Logics,
  filterQueries: FilterQuery<Tobj>[],
}