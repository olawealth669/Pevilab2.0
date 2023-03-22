// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 29"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.638 27.64V.987c0-.545.367-.987.82-.987H.818C.367 0 0 .442 0 .987V27.64c0 .545.367.987.819.987h1.638c-.452 0-.819-.442-.819-.987zm14.742 0V14.807c0-2.288-1.377-3.949-3.275-3.949-.26 0-.522.042-.78.121 1.441.42 2.418 1.902 2.418 3.828V27.64c0 .545.367.987.819.987H17.2c-.452 0-.82-.442-.82-.987z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
