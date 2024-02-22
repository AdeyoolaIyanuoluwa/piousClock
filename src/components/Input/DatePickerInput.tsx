import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerInputProps } from '../../types';
import styles from './input.module.scss'
import Calender from '../../assets/calendar.svg'

const DatePickerInput = ({
  selected,
  dateFormat,
  placeholderText,
  onChange,
  maxDate,
  name,
  minDate,
  showYearDropdown,
  showMonthDropdown,
  scrollableYearDropdown,
  yearDropdownItemNumber,
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  filterDate,
  highlightDates,
}: DatePickerInputProps) => {
  return (
    <div className={styles.input_date}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat={dateFormat}
        placeholderText={placeholderText}
        maxDate={maxDate}
        minDate={minDate}
        name={name}
        filterDate={filterDate}
        selectsStart={selectsStart}
        selectsEnd={selectsEnd}
        startDate={startDate}
        endDate={endDate}
        showYearDropdown={showYearDropdown}
        showMonthDropdown={showMonthDropdown}
        scrollableYearDropdown={scrollableYearDropdown}
        yearDropdownItemNumber={yearDropdownItemNumber}
        highlightDates={highlightDates}
        wrapperClassName={styles.date_picker}
      />
      <img src={Calender} alt="calender" className={styles.calendarIcon} />
    </div>
  );
};

export default DatePickerInput;
