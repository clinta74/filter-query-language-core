import { useState } from 'react';
import { FilterQueryLanguage } from '..';
import { Logics } from '../enums';
 
const initialState: FilterQueryLanguage<unknown> = {
    logic: Logics.AND,
    filterQueries: []    
}

export const useFql = <T>(state?: FilterQueryLanguage<T>) => {
    const [ fql, setFql ] = useState<FilterQueryLanguage<T>>(state || initialState);

    return { 
        fql,
        setFql: setFql(_ => ({
            logic: _.logic,
            filterQueries: [..._.filterQueries]
        })),
    }
}