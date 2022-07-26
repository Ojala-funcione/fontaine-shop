import { useState } from 'react';
import { ExampleController } from './interfaces';

const useExampleController = (): ExampleController => {
  const [example, setExample] = useState<string>('');

  const onButtonPressed = () => {
    setExample('example');
  };

  return { example, onButtonPressed };
};

export default useExampleController;
