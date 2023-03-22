// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 29"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.39 2.577C18.813.939 16.77 0 14.786 0c-3.2 0-5.255 1.265-6.572 2.844V.997c0-.55-.368-.997-.821-.997H.82C.368 0 0 .447 0 .997v26.931c0 .55.368.997.821.997h6.572c.454 0 .821-.446.821-.997V14.961c0-2.464 1.706-3.99 3.286-3.99 1.904 0 3.286 1.679 3.286 3.99v12.967c0 .55.367.997.821.997h6.572c.453 0 .821-.446.821-.997V8.977c0-2.38-.927-4.652-2.61-6.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
