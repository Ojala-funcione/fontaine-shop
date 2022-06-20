// /* eslint-disable react/require-default-props */
// /* eslint-disable no-unused-vars */

// import { Box, Image, useColorModeValue } from '@chakra-ui/react';
// import { FC } from 'react';
// import Gravatar from 'react-gravatar';
// import {
//   TableButtonDelete,
//   TableButtonEdit,
//   TableButtonView
// } from './ActionButtons';

// interface ICellActions {
//   edit?: any;
//   view?: any;
//   onClickDelete?: any;
//   data: any;
// }
// export const CellActions: FC<ICellActions> = ({
//   edit,
//   view,
//   onClickDelete,
//   data
// }) => (
//   <Box
//     w="100%"
//     maxW="120px"
//     h="100%"
//     p={2}
//     display="flex"
//     justifyContent="space-around"
//     alignItems="center"
//     gap="3px"
//   >
//     {onClickDelete && (
//       <TableButtonDelete onClick={onClickDelete} itemId={data} />
//     )}

//     {edit?.Component && (
//       <TableButtonEdit
//         Component={edit.Component}
//         itemId={data}
//         size={edit.size}
//       />
//     )}
//     {view?.Component && (
//       <TableButtonView
//         Component={view.Component}
//         itemId={data}
//         size={view.size}
//       />
//     )}
//   </Box>
// );
// interface ICellImage {
//   data: string;
// }
// export const CellImage: FC<ICellImage> = ({ data, ...props }) => {
//   const urlImage =
//     data ||
//     'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/logo-square.jpg?alt=media&token=f1b1b8d0-a08d-4f9c-9798-e4eb3b4a95d8';
//   return (
//     <Box
//       // p="0.5rem"
//       w="100%"
//       minW="fit-content"
//       display="flex"
//       flexDirection="row"
//       justifyContent="center"
//       alignItems="center"
//       {...props}
//     >
//       <Image h="40px" w="40px" src={urlImage} alt="img" />
//     </Box>
//   );
// };
// interface ICellAvatar {
//   data: string;
// }
// export const CellAvatar: FC<ICellAvatar> = ({ data, ...props }) => (
//   <Box
//     // p="0.5rem"
//     w="100%"
//     minW="fit-content"
//     display="flex"
//     flexDirection="row"
//     justifyContent="center"
//     alignItems="center"
//     {...props}
//   >
//     <Box
//       h="40px"
//       w="40px"
//       // alt="Author"
//       border="2px solid #aaa8"
//       borderRadius="full"
//       overflow="hidden"
//     >
//       <Gravatar email={data} default="robohash" size={40} />
//     </Box>
//   </Box>
// );
export default {};
