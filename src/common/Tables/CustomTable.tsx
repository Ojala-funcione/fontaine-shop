/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import {
  Box,
  IconButton,
  IconButtonProps,
  Skeleton,
  Table,
  TableCellProps,
  TableColumnHeaderProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useBlockLayout,
  useFlexLayout,
  Column
} from 'react-table';
import { FC, ReactNode, useMemo } from 'react';

import { BiSortDown, BiSortUp } from 'react-icons/bi';
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight
} from 'react-icons/hi';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface IHeaderIconProps {
  icon: ReactJSXElement;
}

const HeaderIcon: FC<IHeaderIconProps> = ({ icon }) => (
  <Text
    as="span"
    _hover={{
      color: useColorModeValue('#333', '#eee')
    }}
    minW="fit-content"
    h="fit-content"
    color={useColorModeValue('#666', '#aaa')}
    p={0}
    m={0}
  >
    {icon}
  </Text>
);

const ThCustom: FC<TableColumnHeaderProps> = ({ children, ...props }) => (
  <Th
    minW="fit-content"
    h="fit-content"
    w="fit-content"
    color={useColorModeValue('#343a40', '#f2f2f2')}
    p={0}
    m={0}
    bg="transparent"
    fontSize="0.875rem"
    fontWeight={700}
    textTransform="none"
    {...props}
  >
    <Box
      borderTop={useColorModeValue('1px solid #dee2e6', '1px solid #434b5b')}
      borderBottom={useColorModeValue('1px solid #dee2e6', '1px solid #434b5b')}
      bg={useColorModeValue('#f8f9fa', 'gray.800')}
      p="0.875rem"
      minW="fit-content"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="10px"
      whiteSpace="nowrap"
      _hover={{
        bg: useColorModeValue('#e9ecef', 'gray.700')
      }}
    >
      {children}
    </Box>
  </Th>
);
const TdCustom: FC<TableCellProps> = ({ children, ...props }) => (
  <Td
    borderColor={useColorModeValue('#dee2e6', '#dee2e6')}
    minW="fit-content"
    px={2}
    py={3}
    fontSize="0.875rem"
    fontWeight={useColorModeValue(400, 500)}
    color={useColorModeValue('#495057', '#eee')}
    display="flex"
    alignItems="center"
    {...props}
  >
    {children}
  </Td>
);
const PaginationButton: FC<IconButtonProps> = ({ children, ...props }) => (
  <IconButton
    p="0.2rem"
    minW="fit-content"
    h="fit-content"
    bg="transparent"
    _hover={{
      color: '#2495ff',
      transform: 'scale(1.2, 1.2)'
    }}
    _focus={{
      outline: 'none'
    }}
    _active={{
      bg: 'transparent'
    }}
    {...props}
  >
    {children}
  </IconButton>
);

interface ITableProps<Data extends object> {
  columns: Column<Data>[];
  data: Data[];
  isLoading?: boolean;
  component?: ReactNode;
}

const CustomTable = <Data extends object>({
  data: tableData,
  columns: columnsConfig,
  isLoading,
  component,
  ...props
}: ITableProps<Data>) => {
  const bgRowHoverColor = useColorModeValue('#e9ecef66', 'gray.700');
  const columns = useMemo(() => [...columnsConfig], [columnsConfig]);
  const data = useMemo(() => [...tableData], [tableData]);
  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useFlexLayout
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // rows,
    // preGlobalFilteredRows,
    // setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = tableInstance;

  return (
    <Box
      boxShadow={useColorModeValue(
        '1px 1px 3px 2px #0003',
        '1px 1px 3px 1px #fff1'
      )}
      bg={useColorModeValue('#fff', 'gray.900')}
    >
      <Box
        w="100%"
        h="100%"
        // bg={useColorModeValue('#fff', 'gray.900')}
        minH="400px"
        maxH="100vh"
        p="1rem"
        overflow="auto"
        {...props}
      >
        <Box pb="1rem" display="flex" justifyContent="flex-end">
          {component}
        </Box>
        <Skeleton height="600px" isLoaded={!isLoading}>
          <Table
            variant="simple"
            py="10px"
            overflow="hidden"
            {...getTableProps()}
            _loading={{ background: 'red' }}
          >
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr
                  {...headerGroup.getHeaderGroupProps()}
                  minWidth="500px"
                  key={headerGroup.getHeaderGroupProps().key}
                >
                  {headerGroup.headers.map((column) => (
                    <ThCustom
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      maxW={column.maxWidth}
                      minW={column.minWidth}
                      w="auto"
                      key={
                        column.getHeaderProps(column.getSortByToggleProps()).key
                      }
                    >
                      {column.render('Header')}
                      {!column.disableSortBy && (
                        <HeaderIcon
                          key={column.id + column.Header}
                          icon={
                            column.isSorted ? (
                              column.isSortedDesc ? (
                                <BiSortUp height="1rem" />
                              ) : (
                                <BiSortDown height="1rem" />
                              )
                            ) : (
                              <> </>
                            )
                          }
                        />
                      )}
                    </ThCustom>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()} minWidth="500px">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Tr
                    _hover={{
                      bg: bgRowHoverColor
                    }}
                    {...row.getRowProps()}
                    minWidth="500px"
                    key={row.getRowProps().key}
                  >
                    {row.cells.map((cell) => (
                      <TdCustom
                        {...cell.getCellProps()}
                        key={cell.getCellProps().key}
                        width="auto"
                        maxW={cell.column.maxWidth}
                        minW={cell.column.minWidth}
                      >
                        {cell.render('Cell')}
                      </TdCustom>
                    ))}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Skeleton>
      </Box>
      <Box
        w="100%"
        h="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <PaginationButton
          aria-label="first-page"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          display={!canPreviousPage ? 'none' : undefined}
        >
          <HiOutlineChevronDoubleLeft fontSize="1rem" />
        </PaginationButton>
        <PaginationButton
          aria-label="prev"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          display={!canPreviousPage ? 'none' : undefined}
        >
          <HiOutlineChevronLeft fontSize="1rem" />
        </PaginationButton>
        <Text as="span" fontWeight={600} px="0.5rem">
          {`${pageIndex + 1} de ${pageOptions.length}`}
        </Text>
        <PaginationButton
          aria-label="next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
          display={!canNextPage ? 'none' : undefined}
        >
          <HiOutlineChevronRight fontSize="1rem" />
        </PaginationButton>
        <PaginationButton
          aria-label="last-page"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          display={!canNextPage ? 'none' : undefined}
        >
          <HiOutlineChevronDoubleRight fontSize="1rem" />
        </PaginationButton>
      </Box>
    </Box>
  );
};
CustomTable.defaultProps = {
  isLoading: false,
  component: <> </>
};
export default CustomTable;
