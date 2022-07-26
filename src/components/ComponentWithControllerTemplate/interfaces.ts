export interface ExampleController {
  example: string;
  onButtonPressed: () => void;
}
export interface ExampleInterfaceProps {
  useController?: () => ExampleController;
}
