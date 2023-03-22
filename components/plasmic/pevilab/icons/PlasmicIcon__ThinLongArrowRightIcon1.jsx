// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ThinLongArrowRightIcon1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#tmNuUQxXjca)"}>
        <path
          d={
            "M17.511 0L24 5.949 17.416 12l-.981-1.178 4.45-4.089L0 6.753V5.19l20.885-.02-4.354-3.992L17.51 0z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"tmNuUQxXjca"}>
          <path fill={"currentColor"} d={"M0 0h24v12H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ThinLongArrowRightIcon1Icon;
/* prettier-ignore-end */
