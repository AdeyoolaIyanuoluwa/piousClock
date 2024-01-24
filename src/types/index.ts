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
