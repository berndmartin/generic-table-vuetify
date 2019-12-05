# generic-table-vuetify

Build generic `Data tables` with [Vuetify](https://vuetifyjs.com/). Often the standard behavior of  [Vuetify](https://vuetifyjs.com/en/components/data-tables) data tables is not sufficient. You get full control over tooltips, styling and formatting only when you create the table yourself. 
This is an extended example of such a table in which individual cells are provided with their own format options.

## Example

```
<generic-table-component
    :search="search"
    :table="table"
    :items="desserts" />
```

## Table definitions
```
public table: GenericTable = {
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
        cellType: GenericTableCellType.Link,
        cellFormula: ['recipe', 'name', 'recipe'],
      },
      {
        text: 'Calories',
        value: 'calories',
        description: '[kcal]',
      },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    options: {
      sortBy: ['calories', 'fat'],
      multiSort: true,
      sortDesc: [false, true],
      title: 'Desserts',
    },
  };
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


