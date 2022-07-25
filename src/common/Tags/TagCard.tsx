import { Tag } from '@chakra-ui/react';
import React, { FC } from 'react';

interface ITagProps {
  color?: string;
  bg: string;
  top?: string | undefined;
  left?: string | undefined;
  right?: string | undefined;
  bottom?: string | undefined;
  position?: 'absolute' | 'relative' | undefined;
}
const TagCard: FC<ITagProps> = ({
  children,
  color,
  bg,
  right,
  left,
  top,
  bottom,
  position
}) => (
  <Tag
    color={color}
    bg={bg}
    position={position}
    top={top}
    left={left}
    bottom={bottom}
    right={right}
    borderRadius="5px"
    w="fit-content"
    textTransform="uppercase"
    zIndex="2"
    fontSize={{ base: '0.6rem', sm: '0.875rem' }}
    fontWeight={600}
    minHeight="1rem"
    p={{ base: '3px 4px', sm: '4px 10px' }}
  >
    {children}
  </Tag>
);
TagCard.defaultProps = {
  color: '#fafafa',
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
  position: 'relative'
};
export default TagCard;
