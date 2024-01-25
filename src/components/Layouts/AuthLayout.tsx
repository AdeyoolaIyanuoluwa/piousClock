import React from "react";
import styles from "./layout.module.scss";
import Logo from "../../assets/piouslogo.svg";
import { AuthLayoutProps } from "@/types";

const AuthLayout = ({
  children,
  title,
  subtitle,
  email,
  forgotPassword,
}: AuthLayoutProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <img src={Logo} alt="piousclock logo" />
        <div className={styles.form__container}>
          <div className={styles.form__heading}>
            <h5>{title}</h5>
            <p className={styles.form__paragraph}>{subtitle}</p>
            <p className={styles.form__paragraph}>{email}</p>
          </div>
          <div className={styles.form__children}>{children}</div>
          {forgotPassword && (
            <div className={styles.form__forgotPassword}>
              <p>
                Forgot password? <span>Reset it here</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
