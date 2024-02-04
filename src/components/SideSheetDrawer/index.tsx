import React from "react";
import { SideSheet, Pane, Heading } from "evergreen-ui";
import { SideSheetProps } from "../../types";
import CloseIcon from "../../assets/icons/filterclose-icon.svg";

const SideSheetDrawer = ({
  isShown,
  onCloseComplete,
  children,
  width,
  headingTitle,
}: SideSheetProps) => {
  return (
    <SideSheet
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      containerProps={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        paddingX: "32px",
      }}
      width={width}
    >
      <Pane
        zIndex={1}
        flexShrink={0}
        elevation={0}
        backgroundColor="white"
        borderBottom="default"
        boxShadow="none"
      >
        <Pane
          paddingY={"24px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading fontSize={"16px"} fontWeight={600} color={"#101928"}>
            {headingTitle}
          </Heading>
          <div onClick={onCloseComplete}>
            <img src={CloseIcon} alt="close" />
          </div>
        </Pane>
      </Pane>
      <Pane flex="1" overflowY="scroll" background="#FFF" paddingY={12}>
        {children}
      </Pane>
    </SideSheet>
  );
};

export default SideSheetDrawer;
