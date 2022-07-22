import React, { FC } from 'react';
import useExampleController from './Example.controller';
import { ExampleInterfaceProps } from './interfaces';

const Example: FC<ExampleInterfaceProps> = (props) => {
  const { useController = useExampleController } = props;
  const controller = useController();

  return <div>{`Component With Controller ${controller.example}`}</div>;
};

export default Example;
