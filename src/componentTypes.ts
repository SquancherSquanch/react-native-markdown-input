import { TextInputProps } from 'react-native';

export type MarkdownInputProps = TextInputProps & {
  testID?: string;
  style?: FixMe;
};

export type ToolbarProps = {
  testID: string;
  isFocused?: boolean;
  handleItemPress: (controlName: string) => void;
};

export type ToolbarItemProps = {
  controlName: string;
  testID: string;
  handleItemPress: (controlName: string) => void;
};
