import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { ButtonProps } from "../../types";
import { Icon } from "@iconify/react";
const Button = ({
  theme,
  size,
  children,
  type,
  disabled,
  loading,
  onClick
}: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={classNames(
          styles.btn,
          styles[`btn__${theme}`],
          styles[`btn__${theme}__${size}`]
        )}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {loading ? (
          <Icon
            icon="eos-icons:three-dots-loading"
            style={{ color: "#1d3557" }}
            color="#1d3557"
          />
        ) : (
          <>{children}</>
        )}
      </button>
    </div>
  );
};

export default Button;
