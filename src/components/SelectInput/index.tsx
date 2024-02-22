import Select from "react-select";
import classNames from "classnames";
import styles from "./select.module.scss";
import { SelectInputProps } from "@/types/index";
import * as React from "react";

const SelectInput = ({
  label,
  name,
  placeholder,
  value,
  options,
  onChange,
  menuIsOpen,
  theme,
  type,
  error,
  isMulti,
  isLoading,
  isSearchable,
  closeMenuOnSelect,
  disabled,
  ...rest
}: SelectInputProps) => {
  return (
    <div>
      <div className={styles.select_container}>
        {label && <label htmlFor={name}>{label}</label>}
      </div>
      <div className={styles.search}>
        <Select
          name={name}
          placeholder={placeholder}
          value={value}
          options={options}
          className={classNames("select")}
          onChange={onChange}
          isDisabled={disabled}
          isLoading={isLoading}
          inputId={name}
          menuIsOpen={menuIsOpen}
          multi
          isMulti={isMulti}
          isSearchable={isSearchable}
          closeMenuOnSelect={closeMenuOnSelect}
          styles={{
            control: (baseStyles: any) => ({
              ...baseStyles,
              borderColor: "#F3F4F6",
              backgroundColor: "#FFF",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "14px",
              boxShadow: "none",
              outline: "none",
              outlineColor: "none",
              color: "#5D5D5D",
              width: "auto",
                padding: '0 0 0 10px',
            }),
            menu: (base: any) => ({
              ...base,
              width: "100%",
            }),
            placeholder(base: any) {
              return {
                ...base,
                fontWeight: "400",
                display: placeholder ? { placeholder } : "none",
              };
            },
          }}
          {...rest}
        />
      </div>
      <div> {error ? <span className="error">{error}</span> : null}</div>
    </div>
  );
};

export default SelectInput;
