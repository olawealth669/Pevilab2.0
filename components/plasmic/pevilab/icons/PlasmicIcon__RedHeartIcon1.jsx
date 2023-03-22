// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RedHeartIcon1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#AsrPm63dYHa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M23.267 6.56c3.06-3.19 5.21-5.946 9.943-6.492 8.864-1.008 17 8.049 12.524 16.964-1.274 2.538-3.867 5.558-6.736 8.52-3.148 3.254-6.632 6.442-9.072 8.858L23.27 41l-5.5-5.284C11.152 29.356.381 21.35 0 11.431-.241 4.482 5.252.03 11.57.11c5.646.076 8.032 2.878 11.697 6.448z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"AsrPm63dYHa"}>
          <path fill={"currentColor"} d={"M0 0h47v41H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default RedHeartIcon1Icon;
/* prettier-ignore-end */
