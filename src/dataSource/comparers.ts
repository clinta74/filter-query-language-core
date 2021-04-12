import { noop } from 'lodash';
import moment from 'moment';
import { IOperationsObj } from "../enums";

/**
 * Provide a collection of standard comparison functions
 * for each operation of a filter bar.
 */

export type Iterator<T> = ((item: T, value: T) => boolean) | ((params: any) => void);
export type Comparer<T> = {
    [Key in keyof IOperationsObj]: Iterator<T>
}

/** 
 * Compare numbers for each operation
 */
export const numberComparer: Comparer<number> = {
    EQ: (item, value) => Number(item) === Number(value),
    NEQ: (item, value) => Number(item) !== Number(value),
    LT: (item, value) => Number(item) < Number(value),
    GT: (item, value) => Number(item) > Number(value),
    GTE: (item, value) => Number(item) >= Number(value),
    LTE: (item, value) => Number(item) <= Number(value),
    CONTAINS: noop,
    NCONTAINS: noop,
    STARTS: noop,
    ENDS: noop,
}

/**
 * Date without time compare for each operation
 */
export const dateComparer: Comparer<string | Date> = {
    EQ: (item, value) => moment(item).startOf('day').isSame(moment(value).startOf('day')),
    NEQ: (item, value) => !moment(item).startOf('day').isSame(moment(value).startOf('day')),
    LT: (item, value) => moment(item).startOf('day').isBefore(moment(value).startOf('day')),
    GT: (item, value) => moment(item).startOf('day').isAfter(moment(value).startOf('day')),
    LTE: (item, value) => moment(item).isSameOrBefore(moment(value).startOf('day')),
    GTE: (item, value) => moment(item).isSameOrAfter(moment(value).startOf('day')),
    CONTAINS: noop,
    NCONTAINS: noop,
    STARTS: noop,
    ENDS: noop,
}

/**
 * String case insensitive compare for each operation
 */
export const stringComparer: Comparer<string> = {
    CONTAINS: (item, value) => item.toLowerCase().includes(value.toLowerCase()),
    NCONTAINS: (item, value) => !item.toLowerCase().includes(value.toLowerCase()),
    EQ: (item, value) => item.toLowerCase() === value.toLowerCase(),
    NEQ: (item, value) => item.toLowerCase() !== value.toLowerCase(),
    STARTS: (item, value) => item.toLowerCase().startsWith(value.toLowerCase()),
    ENDS: (item, value) => item.toLowerCase().endsWith(value.toLowerCase()),
    LT: noop,
    GT: noop,
    LTE: noop,
    GTE: noop,
}

/**
 * Date Time compare for each operation
 */
export const dateTimeComparer: Comparer<string | Date> = {
    EQ: (item, value) => moment(item).isSame(value),
    NEQ: (item, value) => !moment(item).isSame(value),
    LT: (item, value) => moment(item).isBefore(value),
    GT: (item, value) => moment(item).isAfter(value),
    LTE: (item, value) => moment(item).isSameOrBefore(value),
    GTE: (item, value) => moment(item).isSameOrAfter(value),
    CONTAINS: noop,
    NCONTAINS: noop,
    STARTS: noop,
    ENDS: noop,
}