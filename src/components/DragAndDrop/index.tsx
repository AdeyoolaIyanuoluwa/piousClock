import React, { DragEvent, useState } from "react";
import styles from "../Input/input.module.scss";

const DragAndDrop = ({ id, onChange }: any) => {
  const [fileName, setFileName] = useState("");
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = Array.from(e.dataTransfer.files)[0];
    onChange?.(file);
    setFileName(file.name);
  };
  // ChangeEvent<FileList>

  const handleFileChange = (e: any) => {
    const file = e.target?.files?.[0];
    onChange?.(file);
    setFileName(file.name);
  };

  return (
    <>
      <div
        className={styles.input_container__file}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {fileName ? (
          <div className={styles.input_container__file__label}>
            <label htmlFor={id}>{fileName}</label>
          </div>
        ) : (
          <p>
            Drag image here or <label htmlFor={id}>Browse from computer</label>
          </p>
        )}

        <input
          id={id}
          type="file"
          hidden
          onChange={(e: any) => handleFileChange(e)}
        />
      </div>
    </>
  );
};

export default DragAndDrop;
