import React from 'react';
import { toast } from 'react-toastify';
import Styles from './toast.module.scss';
import PropTypes from 'prop-types';
import { ToastAlertProps } from '@/types';

const ToastAlert = ({ type, message }: ToastAlertProps) => {

    return toast[type](
        <div className={Styles.toast}>
            <p className={Styles.toast__message}>{message}</p>
        </div>
    );
};

ToastAlert.defaultProps = {
    type: 'Success',
    message: 'none'
};

ToastAlert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
};

export default ToastAlert;
