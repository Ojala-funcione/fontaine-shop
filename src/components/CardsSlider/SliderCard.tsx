/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface SliderCardProps {
  title?: string;
  subTitle?: string;
  fontColor?: string;
  image: string;
  id: string;
  dataIndex: string;
}
const SliderCard: FC<SliderCardProps> = (props) => {
  const { title, image, subTitle, dataIndex, id, fontColor } = props;
  return (
    <Box
      mr="20px"
      ml="9px"
      w="260px"
      h="150px"
      bgSize="cover"
      borderRadius={10}
      border="2px ridge"
      borderColor="#ffffff4d"
      boxShadow="0px 2px 7px 0px rgb(0 0 0 / 67%)"
      style={{
        backgroundImage: `url(${image})`
      }}
      onClick={() => console.log('cardDataIndex: ', dataIndex, 'id:', id)}
    >
      <Box p={5} as="header">
        {title && (
          <Heading
            color={fontColor}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'large', sm: '2xl', lg: '3xl' }}
          >
            {title}
          </Heading>
        )}
        {subTitle && (
          <Text color={fontColor} fontWeight={500} fontSize="large">
            {subTitle}
          </Text>
        )}
      </Box>
      {/* <Stack
        width="100%"
        direction="row-reverse"
        padding={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          bg=""
          color="transparent"
          _hover={{
            transform: 'translateY(-2px)'
          }}
        >
          VER OFERTAS!
        </Button>
      </Stack> */}
    </Box>
  );
};
SliderCard.defaultProps = {
  subTitle: '',
  title: '',
  fontColor: ''
};
export default SliderCard;
