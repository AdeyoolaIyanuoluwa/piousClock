import React, { useState } from "react";
import { convertFile, validateCSVFields } from "../../utils/csv";
import useAlert from "@/admin/hooks/useAlert";
import { useBulkUpload } from "@/admin/hooks/mutations/useBulkUpload";
import styles from "../../admin/container/UserManagement/users.module.scss";

const BulkUpload = () => {
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0)

  const { toast } = useAlert();

  const CSVFields = [
    "first name",
    "last name",
    "phone number",
    "email",
    "profile image",
  ];

  const { mutate: handleBulkUpload } = useBulkUpload();

  const getCSVData = async (file: any) => {
    const data = (await convertFile(file, "toCsv")) as any;

    const { tableHeadings, cellsValidated } = validateCSVFields(
      data,
      CSVFields
    );

    if (!(tableHeadings.length >= 1 && CSVFields.includes(tableHeadings[0]))) {
      toast({
        type: "error",
        message: `CSV headers must match the accepted fields`,
      });
      return;
    }
    if (!cellsValidated) {
      toast({
        type: "error",
        message: `Some cells are empty. Please check and try again`,
      });
      return;
    }
    setFileName(file.name);

    const payload = data.map((field: any) => {
      return Object.entries(field).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key.toLowerCase().split(" ").join("_")]: value,
        }),
        {}
      );
    });
    handleBulkUpload(payload);
    setProgress(100);
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    setProgress(0);
    getCSVData(file);
  };

  return (
    <div>
      <div className={styles.formInput__csv}>
        <p className={styles.formInput__csv__import}>
          Import csv file containing member details to bulk upload members
        </p>{" "}
        <p className={styles.formInput__csv__format}>Format:</p>
        <p>First name - Last name - Email adress - Phone number</p>
        <div className={styles.formInput__label}>
          {" "}
          <label htmlFor="upload-file" onClick={() => handleBulkUpload}>
            Import csv file
          </label>
        </div>
        <input
          type="file"
          id="upload-file"
          onChange={handleFileUpload}
          hidden
          accept=".csv"
          // ref={inputRef}
        />
      </div>
      <span>{fileName}</span>
      <div className={styles.progress_bg}>
        <div className={styles.progress_bg__progress}    style={{ width: `${progress}%` }}></div>
      </div>
      {/* <span onClick={clear}>close</span> */}
    </div>
  );
};

export default BulkUpload;
