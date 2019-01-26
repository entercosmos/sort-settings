# ![SortSettings](https://user-images.githubusercontent.com/44801418/48110622-c34b0e00-e27f-11e8-9dba-d7fb49befdf1.png) SortSettings

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/sort-settings.svg)](https://greenkeeper.io/)

Used for configuring sorters in a view.	

[![npm package][npm-badge]][npm]

## Example

````jsx harmony
<SortSettings 
    fields={[{
        id: 'fld1',
        icon: () => null, // svg icon
        name: 'Field 1'
    }, {
        id: 'fld2',
        icon: () => null, // svg icon
        name: 'Field 2'
    }, {
        id: 'fld3',
        icon: () => null, // svg icon
        name: 'Field 3'
    }]}
    sorters={[{
        id: 'srt1',
        fieldId: 'fld1',
        ascending: true
    }, {
        id: 'srt2',
        fieldId: 'fld2',
        ascending: true
    }, {
        id: 'srt3',
        fieldId: 'fld3',
        ascending: false
    }]}
    onCreate={() => {
        // do something
    }}
    onRemove={({id}) => {
        // do something
    }}
    onSort={({oldIndex, newIndex}) => {
        // do something
    }}
    onFieldIdChange={({id, fieldId}) => {
        // do something
    }}
    onAscendingChange={({id, ascending}) => {
        // do something
    }}
/>
````

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/@cmds/field-settings
