// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ThinLongArrowRightIcon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#L7oT1a4X7a)"}>
        <path
          d={
            "M11.674 0L16 3.966 11.61 8l-.653-.785 2.966-2.726L0 4.503V3.46l13.923-.014-2.902-2.66.653-.786z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"L7oT1a4X7a"}>
          <path fill={"currentColor"} d={"M0 0h16v8H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ThinLongArrowRightIcon2Icon;
/* prettier-ignore-end */
