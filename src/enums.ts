export enum Operations {
  'EQ' = 'EQ',
  'NEQ' = 'NEQ',
  'LT' = 'LT',
  'GT' = 'GT',
  'GTE' = 'GTE',
  'LTE' = 'LTE',
  'CONTAINS' = 'CONTAINS',
  'STARTS' = 'STARTS',
  'ENDS' = 'ENDS',
  'NCONTAINS' = 'NCONTAINS',
}

export enum Logics {
  'AND' = 'AND',
  'OR' = 'OR',
}

export interface IOperationsObj {
  'EQ': Operations.EQ,
  'NEQ': Operations.NEQ,
  'LT': Operations.LT,
  'GT': Operations.GT,
  'GTE': Operations.GTE,
  'LTE': Operations.LTE,
  'CONTAINS': Operations.CONTAINS,
  'STARTS': Operations.STARTS,
  'ENDS': Operations.ENDS,
  'NCONTAINS': Operations.NCONTAINS,
}
