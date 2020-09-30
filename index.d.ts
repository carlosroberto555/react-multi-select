declare module '@kenshooui/react-multi-select' {
  export type MultiSelectMessages = Partial<{
    searchPlaceholder: string;
    noItemsMessage: string;
    noneSelectedMessage: string;
    selectedMessage: string;
    selectAllMessage: string;
    clearAllMessage: string;
    disabledItemsTooltip: string;
  }>;

  export type MultiSelectItem = {
    id: number | string;
    label: string;
  };

  export type MultiSelectProps = {
    messages?: MultiSelectMessages;
    itemHeight?: number;
    items: MultiSelectItem[];
    selectedItems: MultiSelectItem[];
    onChange: (items: MultiSelectItem[]) => void;
  };

  const MultiSelect: React.FC<MultiSelectProps>;

  export default MultiSelect;
}
