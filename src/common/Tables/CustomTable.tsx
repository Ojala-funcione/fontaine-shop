// /* eslint-disable no-nested-ternary */
// /* eslint-disable react/jsx-key */
// import {
//   Box,
//   Button,
//   IconButton,
//   Table,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
//   useColorModeValue
// } from '@chakra-ui/react';
// import {
//   useTable,
//   useSortBy,
//   useGlobalFilter,
//   usePagination,
//   useBlockLayout,
//   useFlexLayout
// } from 'react-table';
// import { FC, useMemo } from 'react';

// import { BiSortDown, BiSortUp } from 'react-icons/bi';
// import {
//   HiOutlineChevronDoubleLeft,
//   HiOutlineChevronLeft,
//   HiOutlineChevronDoubleRight,
//   HiOutlineChevronRight
// } from 'react-icons/hi';
// import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

// interface IHeaderIconProps {
//   icon: ReactJSXElement;
// }

// const HeaderIcon: FC<IHeaderIconProps> = ({ icon }) => (
//   <Text
//     as="span"
//     _hover={{
//       color: useColorModeValue('#333', '#eee')
//     }}
//     minW="fit-content"
//     h="fit-content"
//     color={useColorModeValue('#666', '#aaa')}
//     p={0}
//     m={0}
//   >
//     {icon}
//   </Text>
// );

// const ThCustom: FC = ({ children, ...props }) => (
//   <Th
//     minW="fit-content"
//     h="fit-content"
//     w="fit-content"
//     color={useColorModeValue('#343a40', '#f2f2f2')}
//     p={0}
//     m={0}
//     bg="transparent"
//     fontSize="0.875rem"
//     fontWeight={700}
//     textTransform="none"
//     {...props}
//   >
//     <Box
//       borderTop={useColorModeValue('1px solid #dee2e6', '1px solid #434b5b')}
//       borderBottom={useColorModeValue('1px solid #dee2e6', '1px solid #434b5b')}
//       bg={useColorModeValue('#f8f9fa', 'gray.800')}
//       p="0.875rem"
//       minW="fit-content"
//       display="flex"
//       flexDirection="row"
//       justifyContent="space-between"
//       alignItems="center"
//       gap="10px"
//       whiteSpace="nowrap"
//       _hover={{
//         bg: useColorModeValue('#e9ecef', 'gray.700')
//       }}
//     >
//       {children}
//     </Box>
//   </Th>
// );
// const TdCustom: FC = ({ children, ...props }) => (
//   <Td
//     borderColor={useColorModeValue('#dee2e6', '#dee2e6')}
//     minW="fit-content"
//     px={2}
//     py={3}
//     fontSize="0.875rem"
//     fontWeight={useColorModeValue(400, 500)}
//     color={useColorModeValue('#495057', '#eee')}
//     display="flex"
//     alignItems="center"
//     {...props}
//   >
//     {children}
//   </Td>
// );
// const PaginationButton: FC = ({ children, ...props }) => (
//   <IconButton
//     aria-label=""
//     p="0.2rem"
//     minW="fit-content"
//     h="fit-content"
//     bg="transparent"
//     _hover={{
//       color: '#2495ff',
//       transform: 'scale(1.2, 1.2)'
//     }}
//     _focus={{
//       outline: 'none'
//     }}
//     _active={{
//       bg: 'transparent'
//     }}
//     {...props}
//   >
//     {children}
//   </IconButton>
// );

// interface ColumnConfig {
//   Header: string;
//   accessor: string;
//   Cell?: () => ReactJSXElement;
//   minWidth?: number;
//   maxWidth?: number;
//   sort?: boolean;
// }
// interface ITableProps {
//   columnsConfig: ColumnConfig[];
//   data: any[];
// }
// const CustomTable: FC<ITableProps> = ({
//   data = [],
//   columnsConfig,
//   ...props
// }) => {
//   const bgRowHoverColor = useColorModeValue('#e9ecef66', 'gray.700');
//   const columns = useMemo(() => [...columnsConfig], [columnsConfig]);
//   const tableInstance = useTable(
//     { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
//     useGlobalFilter,
//     useSortBy,
//     usePagination,
//     useFlexLayout
//   );
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     // rows,
//     // preGlobalFilteredRows,
//     // setGlobalFilter,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize }
//   } = tableInstance;

//   return (
//     <Box
//       boxShadow={useColorModeValue(
//         '1px 1px 3px 2px #0003',
//         '1px 1px 3px 1px #fff1'
//       )}
//       bg={useColorModeValue('#fff', 'gray.900')}
//     >
//       <Box
//         w="100%"
//         h="100%"
//         // bg={useColorModeValue('#fff', 'gray.900')}
//         minH="400px"
//         maxH="100vh"
//         p="1rem"
//         overflow="auto"
//         {...props}
//       >
//         <Table
//           variant="simple"
//           py="10px"
//           overflow="hidden"
//           {...getTableProps()}
//         >
//           <Thead>
//             {headerGroups.map((headerGroup) => (
//               <Tr {...headerGroup.getHeaderGroupProps()} minWidth="500px">
//                 {headerGroup.headers.map((column) => (
//                   <ThCustom
//                     {...column.getHeaderProps(
//                       column.sort && column.getSortByToggleProps()
//                     )}
//                     maxW={column.maxWidth}
//                     minW={column.minWidth}
//                     w="auto"
//                   >
//                     {column.render('Header')}
//                     {column.sort && (
//                       <HeaderIcon
//                         icon={
//                           column.isSorted ? (
//                             column.isSortedDesc ? (
//                               <BiSortUp height="1rem" />
//                             ) : (
//                               <BiSortDown height="1rem" />
//                             )
//                           ) : (
//                             ''
//                           )
//                         }
//                       />
//                     )}
//                   </ThCustom>
//                 ))}
//               </Tr>
//             ))}
//           </Thead>
//           <Tbody {...getTableBodyProps()} minWidth="500px">
//             {page.map((row) => {
//               prepareRow(row);
//               return (
//                 <Tr
//                   _hover={{
//                     bg: bgRowHoverColor
//                   }}
//                   {...row.getRowProps()}
//                   minWidth="500px"
//                 >
//                   {row.cells.map((cell) => (
//                     <TdCustom
//                       {...cell.getCellProps()}
//                       width="auto"
//                       maxW={cell.column.maxWidth}
//                       minW={cell.column.minWidth}
//                     >
//                       {cell.render('Cell')}
//                     </TdCustom>
//                   ))}
//                 </Tr>
//               );
//             })}
//           </Tbody>
//         </Table>
//       </Box>
//       <Box
//         w="100%"
//         h="60px"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <PaginationButton
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//           display={!canPreviousPage && 'none'}
//         >
//           <HiOutlineChevronDoubleLeft fontSize="1rem" />
//         </PaginationButton>
//         <PaginationButton
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//           display={!canPreviousPage && 'none'}
//         >
//           <HiOutlineChevronLeft fontSize="1rem" />
//         </PaginationButton>
//         <Text as="span" fontWeight={600} px="0.5rem">
//           {`${pageIndex + 1} de ${pageOptions.length}`}
//         </Text>
//         <PaginationButton
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//           display={!canNextPage && 'none'}
//         >
//           <HiOutlineChevronRight fontSize="1rem" />
//         </PaginationButton>
//         <PaginationButton
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//           display={!canNextPage && 'none'}
//         >
//           <HiOutlineChevronDoubleRight fontSize="1rem" />
//         </PaginationButton>
//       </Box>
//     </Box>
//   );
// };
// export default CustomTable;
export default {};