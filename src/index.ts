import { Comparer } from './dataSource/comparers';
import { Operations, Logics, IOperationsObj } from './enums';

export type ChangeFQLHander<Tobj> = (fql: FilterQueryLanguage<Tobj>) => void;
export type RemoveFilterHandler<Tobj> = (field: FitlerQueryField<Tobj>) => void;
export type GetDefaultFilterQueryHandler<Tobj> = (field: FitlerQueryField<Tobj>) => FilterQuery<Tobj>;

export type FilterUpdateHandler<Tobj> = (filterQuery: FilterQuery<Tobj>) => void;
export type FilterItemValue<Tobj> = (Tobj[keyof Tobj] | unknown);

export interface FilterItem<Tobj> {
  operation: Operations,
  value: FilterItemValue<Tobj>,
}

export type FitlerQueryField<Tobj> = (keyof Tobj) | string | (keyof Tobj)[] | string[];

export type FilterMapper<Tobj> = Partial<{ [Key: string]: Comparer<any> }> |
  Partial<{ [Key in keyof Tobj]: Comparer<any> }>;

export interface FilterQuery<Tobj> {
  logic: Logics,
  field: FitlerQueryField<Tobj>,
  filterItems: FilterItem<Tobj>[],
}

export interface FilterQueryLanguage<Tobj> {
  logic: Logics,
  filterQueries: FilterQuery<Tobj>[],
}

export interface IGetDefaultFilterQuery<Tobj> {
  getDefaultFilterQuery?: GetDefaultFilterQueryHandler<Tobj>,
}

export interface IDefaultFilterProps {
  getDefaultFilterQuery: () => void;
}

export type FilterProps<Tobj, Props = {}> = {
  label: string;
  field: FitlerQueryField<Tobj>,
  labelClassName?: string,
  filterQuery?: FilterQuery<Tobj>,
  onFilterUpdate?: FilterUpdateHandler<Tobj>,
  shown?: boolean,
} & Props & IGetDefaultFilterQuery<Tobj>;