// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 23"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 0l2.64 2.057L18 1.54l1.213 3.048 3.18 1.162-.54 3.22L24 11.5l-2.146 2.53.539 3.22-3.18 1.162L18 21.46l-3.36-.517L12 23l-2.64-2.057L6 21.46l-1.213-3.048-3.18-1.162.54-3.22L0 11.5l2.146-2.53-.539-3.22 3.18-1.162L6 1.54l3.36.517L12 0zm0 7.4l1.238 2.9 3.26.232-2.494 2.025.777 3.044-2.779-1.649-2.78 1.649.778-3.044-2.498-2.025 3.26-.232L12 7.4zM12 5c3.746 0 6.783 2.91 6.783 6.5S15.746 18 12 18c-3.746 0-6.783-2.91-6.783-6.5S8.254 5 12 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
