import { ReactNode } from "react";

export type ChildrenProps = {
  children?: ReactNode;
};

export type AvatarProps = {
  name: string;
  className?: string;
  profile?: boolean;
  url?: string;
};

export type ButtonProps = {
  children: ReactNode;
  type?: string | any;
  size: string;
  loading?: boolean;
  theme: string;
  disabled?: boolean;
  onClick?: (data: any) => void;
};

export type SearchBoxProps = {
  onSearch?: (data: any) => void;
  searchName?: string;
  searchValue?: string;
  onChange: (data: any) => void;
  height?: string;
  dataTestId?: string;
};
export type DropdownProps = {
  children?: ReactNode;
  content: ReactNode;
  style?: any;
};

export type OptionProps = {
  children: ReactNode;
  image?: string;
  onClick?: (data: any) => void;
  dropStyles?: any;
};

export type InputProps = {
  name?: string;
  title?: string;
  error?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  type?: string;
  max?: any;
  inputValue?: string | undefined;
  formClassName?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  handleSearch?: (e: string) => string;
  'data-testid'?: string;
  darkMode?: boolean;
  errorLogo?: boolean;
  successLogo?: boolean;
  loadingLogo?: boolean;
  children?: ReactNode;
  control?: string;
  labelClassName?: string;
  placeholder?: string;
  onlyCountries?: string[];
  country?: string;
  setTouched?: (e: Record<string, boolean>) => void | undefined;
  options?: { value: string; label: string }[];
  setFieldValue?: (
    val: string,
    obj: Record<string, string | number | boolean | undefined>
  ) => void;
};
export type ModalProps = {
  isShown: boolean;
  onClose: () => void;
  width?: string;
  children?: ReactNode;
  onSubmit?: () => void;
  showSelectsPanel?: boolean;
  panelId?: any;
};

export type PaginationProps = {
  currentPage?: number | any;
  totalPage?: number | any;
  changeCurrentPage?: (val: { selected: number }) => void;
  handlePageInput?: any;
  forcePage?: any;
};
export type TableProps = {
  tableHeaders?: any[];
  header?: { key: string; text: string };
  tableData: any[];
  cols?: any;
  content?: any;
  placeHolderImg?: ReactNode;
  placeholderText?: string;
  tablePlaceholderSubText?: string;
  headers?: any;
  mapKey: string;
  children?: any;
  loading?: boolean;
  onRowClick?: (row: any) => void | undefined;
  useChecks?: boolean;
  checkedItems?: any[];
  setCheckedItems?: (item: any) => void;
  currentPage?: number;
  totalPage?: number;
  changeCurrentPage?: (val: { selected: number }) => void;
  handlePageInput?: (data: any) => void;
  paginate?: boolean;
  forcePage: any
};

export type ToastAlertProps = {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
};