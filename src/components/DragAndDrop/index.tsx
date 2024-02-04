import React, { ChangeEvent, DragEvent } from "react";
import styles from "../Input/input.module.scss";

const DragAndDrop = ({
  id,
  onChange,
}: {
  id: string;
  onChange?: (e: Record<string, any>) => void;
}) => {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onChange?.(Array.from(e.dataTransfer.files)[0]);
  };

  const handleFileChange = (e: ChangeEvent<FileList>) => {
    onChange?.(e.target?.files?.[0]);
  };

  return (
    <>
      <div
        className={styles.input_container__file}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p>
          Drag image here or <label htmlFor={id}>Browse from computer</label>
          <input
            id={id}
            type="file"
            hidden
            onChange={(e) => handleFileChange(e)}
          />
        </p>
      </div>
    </>
  );
};

export default DragAndDrop;
