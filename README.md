# Filter Query Language Core
Base types and interfaces to store FQL in your application.
Provides functions to filter a data set using an FQL.

You can view the [demo](https://clinta74.github.io/react-dynamic-filterbar/).

## Install
``` 
npm install filter-query-language-core
```

## Usage
Use provided types to store FQL in your app.

``` javascript

```


## Understanding Filter Query Language (FQL)
FQL is designed to be a normalized definition of filters that can be applied to a dataset in a serializable format.  The format
allows for flexable filter configuration that still includes order of filter application and nested properties. This result is an
object that can represent the WHERE clause of a SQL while keeping the information needed to display the filters.

``` javascript
  FQL = { // The base FQL wrapping object.
    logic: AND, // AND | OR - Used to represent how multiple filters are grouped together. (Default: AND)
    filterQueries: [ 
      logic: OR, // Logic used to join filter values on a property together and multiple filters.
      field: 'name', // The property or field to be filtered on. Can be array of fields or nested fields. ex ['user.firstName', 'user.lastName']
      filterItems: [{
        operation: EQ, // Logic used in the comparison operation.
        value: 'Jim' // The value to check against.
      }]
    ]
  }
```
As SQL
``` sql
SELECT * FROM USER WHERE [name] = 'Jim';
```

``` javascript
// The base FQL wrapping object.
const fql = {
    logic: 'AND',
    filterQueries: [
        {
            logic: 'OR',
            field: 'comment',
            filterItems: [{
                operation: 'CONTAINS',
                value: 'Test'
            }]
        },
        {
            logic: 'OR',
            field: 'color',
            filterItems: [{
                operation: 'EQ',
                value: 'red'
            }, {
                operation: 'EQ',
                value: 'blue'
            }]
        }
    ]
}
```
As SQL
``` sql
SELECT * FROM USER WHERE [comment] LIKE '%Test%' AND ([color] = 'red' OR [color] = 'blue');
SELECT * FROM USER WHERE [comment] LIKE '%Test%' AND ([color] IN ('red', 'blue'));
```

#### Examples
Text filter added for a name.
- Input to type in string to filter on.
- Optionally select filter logic.
  - Contains
  - Equals (An exact match)
  - Starts with
  - Ends with
  - Does not contain
- Optionally provide case sensitivity.  (Preferred case insensitivity.)

## Custom Filters
You can make your own custom filter. The filter is responsable for consuming its part of filter query and calling the event handler when that filter query has changed.  The filter is wrapped in a control that supplies a remove link.