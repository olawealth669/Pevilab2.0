// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
          "M20.5 0l4.511 3.667 5.739-.921 2.072 5.432 5.432 2.072-.92 5.739L41 20.5l-3.667 4.511.921 5.739-5.432 2.072-2.072 5.432-5.739-.92L20.5 41l-4.511-3.667-5.739.921-2.072-5.432-5.432-2.072.92-5.739L0 20.5l3.667-4.511-.921-5.739 5.432-2.072 2.072-5.432 5.739.92L20.5 0zm0 13.193l2.115 5.168 5.57.414-4.262 3.61 1.328 5.425-4.748-2.94-4.748 2.94 1.328-5.425-4.267-3.61 5.569-.414 2.115-5.168zm0-4.281c6.4 0 11.588 5.188 11.588 11.588 0 6.4-5.188 11.588-11.588 11.588-6.4 0-11.588-5.188-11.588-11.588 0-6.4 5.188-11.588 11.588-11.588z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
