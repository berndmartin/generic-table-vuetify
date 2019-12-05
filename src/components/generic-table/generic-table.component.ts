import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop, PropSync } from 'vue-property-decorator';
import { GenericTable } from '@/components/generic-table/index';
import { GenericTableHeader } from '@/components/generic-table/generic-table.types';

@Component
export default class GenericComponent extends Vue {
    @PropSync('search', { type: String, default: '<default>' }) public syncedSearch!: string;

    @Prop() public table!: GenericTable;

    @Prop() public items!: any[];

    public changeSort(header: GenericTableHeader): void {
      if (!header.sortable) {
        if (this.table.options && !this.table.options.sortDesc) {
          this.table.options.sortDesc = [];
        }

        if (this.table.options && !this.table.options.sortBy) {
          this.table.options.sortBy = [];
        }

        if (this.table.options.sortBy.length > 0
                && this.table.options.sortDesc.length !== this.table.options.sortBy.length) {
          this.table.options.sortDesc = new Array(this.table.options.sortBy.length).fill(false);
        }

        if (this.table.options.sortBy.includes(header.value)) {
          const posSortBy = this.isSortPosition(header);
          if (this.table.options.sortDesc[posSortBy] === false) {
            this.table.options.sortDesc.splice(posSortBy, 1, true);
          } else {
            this.table.options.sortBy.splice(posSortBy, 1);
            this.table.options.sortDesc.splice(posSortBy, 1);
          }
        } else if (!this.table.options.multiSort) {
          this.table.options.sortBy = [header.value];
          this.table.options.sortDesc = [false];
        } else {
          this.table.options.sortBy.push(header.value);
          this.table.options.sortDesc.push(false);
        }
      }
    }


    public isSortPosition(header: GenericTableHeader): number {
      return this.table.options.sortBy.indexOf(header.value);
    }

    public isSortDesc(header: GenericTableHeader): number {
      // 0 = not in sorting, 1 = sort ascending, 2 = sort descending
      const posSortBy = this.isSortPosition(header);
      if (posSortBy >= 0) {
        if (this.table.options.sortDesc[posSortBy] === false) {
          return 1;
        }
        return 2;
      }
      return 0;
    }

    public executeItem(type: string, item: any) {
      this.$emit('interface', { ...item, executeType: type });
    }
}
