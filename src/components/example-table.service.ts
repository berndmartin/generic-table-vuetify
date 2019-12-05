class ExampleTableService {
    public desserts: Array<any> = [
      {
        name: 'Frozen Yogurt',
        calories: 200,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
        recipe: 'https://www.thehealthymaven.com/how-to-make-frozen-yogurt/',
      },
      {
        name: 'Ice cream sandwich',
        calories: 200,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
        recipe: 'https://www.seriouseats.com/recipes/2012/07/classic-chocolate-vanilla-ice-cream-sandwich-recipe.html',
      },
      {
        name: 'Eclair',
        calories: 300,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
        recipe: 'https://natashaskitchen.com/classic-eclair-recipe-video/',
      },
      {
        name: 'Cupcake',
        calories: 300,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
        recipe: 'https://www.bbcgoodfood.com/recipes/cupcakes',
      },
      {
        name: 'Gingerbread',
        calories: 400,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
        recipe: 'https://sallysbakingaddiction.com/best-gingerbread-cookies/',
      },
      {
        name: 'Jelly bean',
        calories: 400,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
        recipe: 'https://www.jellybelly.co.uk/recipes',
      },
      {
        name: 'Lollipop',
        calories: 400,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
        recipe: 'https://www.thespruceeats.com/lollipops-521375',
      },
      {
        name: 'Honeycomb',
        calories: 400,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
        recipe: 'https://www.bbcgoodfood.com/recipes/2685640/honeycomb',
      },
      {
        name: 'Donut',
        calories: 500,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
        recipe: '',
      },
      {
        name: 'KitKat',
        calories: 500,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
        recipe: '',
      },
    ];

    public getDesserts(): Promise<Array<any>> {
      return new Promise<Array<any>>((resolve) => {
        resolve(this.desserts.map(a => ({ ...a })));
      });
    }
}

const exampleTableService = new ExampleTableService();
export default exampleTableService;
