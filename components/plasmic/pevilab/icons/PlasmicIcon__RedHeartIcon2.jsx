// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RedHeartIcon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#dc6oDx3xuqa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M13.366 3.84c1.758-1.867 2.993-3.48 5.713-3.8 5.09-.59 9.764 4.711 7.194 9.93-.732 1.486-2.222 3.254-3.87 4.988-1.808 1.904-3.81 3.77-5.212 5.185L13.368 24l-3.16-3.093C6.409 17.184.22 12.497 0 6.691-.138 2.624 3.017.018 6.647.065 9.89.11 11.26 1.75 13.366 3.839z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"dc6oDx3xuqa"}>
          <path fill={"currentColor"} d={"M0 0h27v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default RedHeartIcon2Icon;
/* prettier-ignore-end */
