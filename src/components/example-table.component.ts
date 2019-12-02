import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { GenericTable } from '@/components/generic-table';
import exampleTableService from '@/components/example-table.service';

@Component({
  components: {
    GenericTableComponent: () => import('@/components/generic-table/generic-table.component.vue'),
  },
})
export default class ExampleTableComponent extends Vue {
  public search = '';

  public desserts: Array<any> = [];

  public table: GenericTable = {
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
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

  public loadData() {
    exampleTableService.getDesserts()
      .then((dessert: Array<any>) => {
        this.desserts = dessert;
      });
  }

  private mounted() {
    this.loadData();
  }

  @Watch('$route', { immediate: true, deep: true })
  public onUrlChange(newVal: any) {
    const pathArray = this.$route.fullPath.split('/');

    if (pathArray[1] === 'example2') {
      this.table.options.multiSort = false;
      this.table.options.sortBy = ['calories'];
    } else {
      this.table.options.multiSort = true;
      this.table.options.sortBy = ['calories', 'fat'];
    }
  }
}
