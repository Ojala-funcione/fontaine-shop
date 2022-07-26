export interface IAboutUsData {
  title: string;
  description: string;
  shortDescription: string;
  imgUrl: string;
}
export interface IAboutUsSectionController {
  isLoading: boolean;
  data?: IAboutUsData;
}
export interface IAboutUsSectionProps {
  useController?: () => IAboutUsSectionController;
}
