import { TextInputProps } from 'react-native';

import { MarkdownSymbol } from '../types';

export interface MarkdownInputProps
  extends Omit<TextInputProps, 'onChangeText' | 'multiline'> {
  /**
   * A description of the prop that you seem fit :)
   */
  onChangeText: (text: string) => void;
  CustomToolbarItem?: React.ComponentType<ToolbarItemProps>;
  toolbarItemAccessibilityTraits?: ToolbarItemAccessibilityTraits;
}

export interface ToolbarProps {
  controls: Array<MarkdownSymbol>;
  nativeID: string;
  testID: string;
  isFocused?: boolean;
  CustomToolbarItem?: React.ComponentType<ToolbarItemProps>;
  handleItemPress: (controlName: MarkdownSymbol) => void;
  toolbarItemAccessibilityTraits?: ToolbarItemAccessibilityTraits;
}

export interface ToolbarItemProps {
  controlName: MarkdownSymbol;
  testID: string;
  handleItemPress: (controlName: MarkdownSymbol) => void;
  accessibilityLabel: string;
  accessibilityHint: string;
}

type AccessibilityTraits = {
  accessibilityLabel: string;
  accessibilityHint: string;
};

type ToolbarItemAccessibilityTraits = {
  bold: AccessibilityTraits;
  italic: AccessibilityTraits;
  link: AccessibilityTraits;
  heading: AccessibilityTraits;
  orderedList: AccessibilityTraits;
  unorderedList: AccessibilityTraits;
};
