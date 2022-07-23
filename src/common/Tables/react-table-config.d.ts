import {
  //   UseColumnOrderInstanceProps,
  //   UseColumnOrderState,
  //   UseExpandedHooks,
  //   UseExpandedInstanceProps,
  //   UseExpandedOptions,
  //   UseExpandedRowProps,
  //   UseExpandedState,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGlobalFiltersColumnOptions,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
  //   UseGroupByCellProps,
  //   UseGroupByColumnOptions,
  //   UseGroupByColumnProps,
  //   UseGroupByHooks,
  //   UseGroupByInstanceProps,
  //   UseGroupByOptions,
  //   UseGroupByRowProps,
  //   UseGroupByState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  //   UseResizeColumnsColumnOptions,
  //   UseResizeColumnsColumnProps,
  //   UseResizeColumnsOptions,
  //   UseResizeColumnsState,
  //   UseRowSelectHooks,
  //   UseRowSelectInstanceProps,
  //   UseRowSelectOptions,
  //   UseRowSelectRowProps,
  //   UseRowSelectState,
  //   UseRowStateCellProps,
  //   UseRowStateInstanceProps,
  //   UseRowStateOptions,
  //   UseRowStateRowProps,
  //   UseRowStateState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState
} from 'react-table';

// type Gravatar.DefaultImage =
//   | '404'
//   | 'mm'
//   | 'mp'
//   | 'identicon'
//   | 'monsterid'
//   | 'robohash'
//   | 'wavatar'
//   | 'retro'
//   | 'blank';

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<
    D extends Record<string, unknown>
  > extends UseSortByOptions<D>,
      UseFiltersOptions<D>,
      UsePaginationOptions<D>,
      UseGlobalFiltersOptions<D>,
      //   UseExpandedOptions<D>,
      //       UseGroupByOptions<D>,
      //       UseResizeColumnsOptions<D>,
      //       UseRowSelectOptions<D>,
      //       UseRowStateOptions<D>,
      // note that having Record here allows you to add anything to the options,
      // this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more
      // specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface Hooks<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseSortByHooks<D> {}
  //   UseExpandedHooks<D>,
  //       UseGroupByHooks<D>,
  //       UseRowSelectHooks<D>,

  export interface TableInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UsePaginationInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseSortByInstanceProps<D> {}
  //   UseColumnOrderInstanceProps<D>,
  //       UseExpandedInstanceProps<D>,
  //       UseGroupByInstanceProps<D>,
  //       UseRowSelectInstanceProps<D>,
  //       UseRowStateInstanceProps<D>,

  export interface TableState<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseFiltersState<D>,
      UsePaginationState<D>,
      UseGlobalFiltersState<D>,
      UseSortByState<D> {}
  //   UseColumnOrderState<D>,
  //   UseExpandedState<D>,
  //   UseGroupByState<D>,
  //   UseResizeColumnsState<D>,
  //   UseRowSelectState<D>,
  //   UseRowStateState<D>,

  export interface ColumnInterface<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseGlobalFiltersColumnOptions<D>,
      UseFiltersColumnOptions<D>,
      UseSortByColumnOptions<D> {}
  //       UseGroupByColumnOptions<D>,
  //       UseResizeColumnsColumnOptions<D>,

  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseFiltersColumnProps<D>,
      UseSortByColumnProps<D> {}
  //   UseGroupByColumnProps<D>,
  //   UseResizeColumnsColumnProps<D>,

  //   export interface Cell<
  //     D extends Record<string, unknown> = Record<string, unknown>
  //     // V = any
  //   > extends UseGroupByCellProps<D>,
  //       UseRowStateCellProps<D> {}

  //   export interface Row<
  //     D extends Record<string, unknown> = Record<string, unknown>
  //   > extends UseExpandedRowProps<D>,
  //       UseGroupByRowProps<D>,
  //       UseRowSelectRowProps<D>,
  //       UseRowStateRowProps<D> {}
}
