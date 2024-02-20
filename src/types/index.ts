import { ReactNode } from "react";

export type ChildrenProps = {
  children?: ReactNode;
  profile?: boolean;
};

export type AvatarProps = {
  name: string;
  className?: string;
  profile?: boolean;
  url?: string;
  size?: string;
  onClick?: (data: any) => void;
};

export type ButtonProps = {
  children: ReactNode;
  type?: string | any;
  size: string;
  loading?: boolean;
  isPending?: boolean;
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
  width?: string;
  size?: string;
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
  id?: string;
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
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLDivElement>
      | string
  ) => void;
  handleSearch?: (e: string) => string;
  "data-testid"?: string;
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
  displayed?: number | any;
  totalCount?: number | any
};
export type TableProps = {
  tableHeaders?: any[];
  header?: { key: string; text: string };
  tableData?: any[];
  cols?: any;
  content?: any;
  placeHolderImg?: ReactNode;
  placeholderText?: string;
  tablePlaceholderSubText?: string;
  headers?: any;
  children?: any;
  loading?: boolean;
  onRowClick?: (row: any) => void | undefined;
  currentPage?: number;
  totalPage?: number;
  changeCurrentPage?: (val: { selected: number }) => void;
  handlePageInput?: (data: any) => void;
  paginate?: boolean;
  check?: boolean;
  sortRows?: any;
  user?: any;
  displayed?: number;
  totalCount?: number;
  forcePage?: any
};

export type ToastAlertProps = {
  type: "success" | "error" | "warning" | "info";
  message: string;
};
export type AuthLayoutProps = {
  title: string;
  subtitle: string;
  email?: string | null;
  children: ReactNode;
  forgotPassword?: boolean;
};
export type SideSheetProps = {
  isShown: boolean;
  onCloseComplete: () => void;
  containerProps?: object;
  width?: string;
  shouldAutoFocus?: boolean;
  headingTitle?: string;
  children: JSX.Element | JSX.Element[];
  position?: any 
};

export type DatePickerInputProps = {
  selected?: any;
  className?: string;
  dateFormat?: string;
  placeholderText?: string;
  type?: string;
  label?: string;
  onChange: (date: any) => void;
  id?: string;
  maxDate?: Date | null;
  noBorder?: boolean;
  name?: string;
  spaceIcon?: boolean;
  minDate?: Date | null;
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  scrollableYearDropdown?: boolean;
  yearDropdownItemNumber?: number;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  filterDate?: (date: Date) => boolean;
  highlightDates?: any;
};
export type SelectInputProps = {
  name: string;
  type?: string;
  label: string;
  selected?: string;
  options?: { value: string; label: string }[];
  placeholder: string | ReactNode;
  menuIsOpen?: boolean;
  formClassName?: string;
  disabled?: boolean;
  error?: boolean;
  theme?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  multi?: boolean;
  styles?: object;
  closeMenuOnSelect?: boolean;
  controls?: Record<string, string | number>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: Record<string, string | number> | any;
  control?: string;
  onChange?: (val: { value: string; label: string }) => any;
  handleChange?: (val: { value: string; label: string }) => void;
  setTouched?: (val: object) => void;
  setFieldValue?: (
    val: string,
    obj: Record<string, string | number | boolean | undefined>
  ) => void;
};
export type DeleteMemberModalProps = {
  isShown: boolean;
  onClose: () => void;
  title?: string;
  caption?: string;
  onClick?: (data: any) => void;
  loading?: boolean;
  // setIsShown?: (val: boolean) => void;
  singleMemberId?: any
  // refetch: ()=>void
};
export type ClockInModalProps = {
  isShown: boolean;
  onClose: () => void;
  title?: string;
  caption?: string;
  onClick?: (data: any) => void;
  loading?: boolean;
  member?: any;
  disabled?: boolean;
};
export type CountDownProps = {
  minutes: any;
  seconds: any;
};
