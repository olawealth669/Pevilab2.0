// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 121"}
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
          "M1.267 51.43l.897 38.577c.12 3.987.37 6.55.72 7.962.277 1.115.656 1.434 1.11 1.144a.2.2 0 01.109-.032l4.338-.007.065.01c.608.036 1.03-.592 1.294-1.773.308-1.375.458-3.545.482-6.345l-.002-42.528a7.066 7.066 0 01-.025-.592c0-.055 0-.11.002-.166-.067-1.356-.238-2.27-.491-2.84-.35-.783-.875-1.086-1.517-1.06h-.007v.01l-5.507-.003c-.567.094-1.002.566-1.246 1.58-.26 1.087-.355 2.964-.228 5.871l.006.192zm35.1-1.64c0-.682.013-1.33.037-1.94l-2.04-4.73c-.294-.68-.616-1.46-.938-2.244-.55-1.337-1.108-2.69-1.68-3.874a73.37 73.37 0 00.527-3.772c.634 1.29 1.242 2.77 1.84 4.228.3.725.597 1.447.919 2.192l1.814 4.189c.092-.442.198-.846.316-1.216.518-1.62 1.26-2.41 2.213-2.414v-.01l5.166.007c1.08-.013 1.96.67 2.569 2.296.676 1.812.995 4.567.86 8.518l-1.143 40.944c-.083 3.653-.362 6.522-.858 8.499-.527 2.104-1.262 3.142-2.225 3.002l-4.645.003c-.651.117-1.202-.494-1.664-1.772-.338-.937-.617-2.218-.842-3.815h-1.606c.216 2.195.205 4.28.032 6.127-.178 1.906-.524 3.526-.965 4.742-.432 1.19-.96 2.004-1.511 2.316-.54.306-1.103.14-1.627-.615-.61 2.208-1.252 3.604-1.92 4.241-.673.641-1.354.511-2.043-.325-.653 2.511-1.376 4.088-2.173 4.687-.81.611-1.672.188-2.587-1.305-.284.775-.582 1.386-.893 1.832-.44.631-.904.923-1.387.874-1.157-.117-1.937-1.307-2.558-3.232-.591-1.835-.99-4.193-1.439-6.905l-2.56-15.495H11.37c-.115 2.004-.317 3.698-.618 5.042-.506 2.267-1.25 3.467-2.277 3.395l-4.332.003c-.858.485-1.594-.247-2.17-2.563-.51-2.049-.858-5.37-1.007-10.254l-.006-.18-.895-38.472c-.178-4.153.018-7.09.5-9.097.485-2.023 1.216-2.937 2.118-3.083l.074-.016h5.485v.01c.865-.033 1.61.461 2.175 1.73.454 1.021.78 2.459.948 4.413h3.733c.937-2.195 1.815-3.919 2.787-4.97.144-.155.29-.295.438-.419.197.868.41 1.695.634 2.475.115.399.232.785.354 1.158-.374.15-.728.413-1.068.78-.877.947-1.694 2.6-2.589 4.717-.103.283-.233.448-.374.448h-3.793v40.694h2.217c.235 0 .438.462.539 1.139l2.721 16.466c.399 2.414.75 4.499 1.194 5.874.414 1.285.956 2.082 1.788 2.17.313.029.612-.16.897-.566.175-.251.346-.589.514-1.012l-1.773-11.51a6.334 6.334 0 01-.068-.779c-.007-.273 0-.548.024-.81.023-.263.06-.507.11-.718a2.15 2.15 0 01.182-.516c.07-.129.146-.21.225-.236.078-.027.158 0 .233.08.076.08.146.21.207.384.061.175.112.389.149.631l1.927 12.512c.717 1.265 1.368 1.658 1.953 1.219.534-.4 1.039-1.515 1.512-3.314l-2.777-15.124a5.917 5.917 0 01-.084-.758 7.163 7.163 0 01.005-.814c.017-.267.05-.52.095-.744.045-.224.102-.415.169-.562.066-.147.14-.248.218-.296.078-.048.158-.042.235.017.077.06.15.171.215.328.064.157.12.357.162.589l2.927 15.943c.513.722 1.006.884 1.476.439.448-.43.897-1.425 1.346-3.038l-2.653-17.319c-.155-1.021-.044-2.29.25-2.83.142-.26.307-.316.46-.154.154.163.282.53.357 1.02l2.743 17.917c.357.719.77.904 1.168.68.346-.199.68-.712.953-1.467.264-.725.469-1.669.57-2.745.11-1.181.098-2.569-.091-4.075a6.89 6.89 0 01-.049-.966 1.848 1.848 0 01-.217-.557 5.137 5.137 0 01-.126-.829l-6.02-37.679c-.669-3.883-1.273-3.984-1.856-2.777-.413.855-.848 2.234-1.284 3.613-.264.84-.529 1.678-.748 2.306l-1.069 3.054c-.744 2.056-1.582 3.155-2.377 3.386-.53.15-1.044-.085-1.506-.686-.478-.622-.897-1.63-1.215-3.002-.343-1.474-.567-3.347-.62-5.572-.016-.64.054-1.232.174-1.652L19.77 45.31c.32.849.66 1.62 1.014 2.296l-2.857 11.797c.056.995.17 1.83.324 2.498.18.773.42 1.35.697 1.707.292.384.63.527.987.426.57-.163 1.177-.972 1.725-2.478l1.051-3.012c.265-.761.486-1.46.706-2.16.485-1.535.97-3.07 1.477-4.12 1.178-2.436 2.35-2.518 3.509 4.228l5.942 37.181h2.02l.002-43.881zM24.707 0c3.646 0 6.6 10.255 6.6 22.897 0 12.648-2.956 22.893-6.6 22.893-3.647 0-6.6-10.251-6.6-22.893C18.106 10.245 21.061 0 24.706 0zm-1.841 20.77c.229.455.417.875.593 1.35.135.362.263.756.382 1.18.316-1.603.92-4.241 1.514-6.443.496-1.834.993-3.386 1.328-3.838l.03-.039h1.76l-.238.92c-.92 3.55-1.647 6.492-2.3 9.602-.652 3.112-1.236 6.41-1.873 10.674l-.148.989-.136-1.008c-.33-2.443-.64-4.508-1.031-6.34-.388-1.82-.858-3.427-1.508-4.972l-.3-.712 1.873-1.47.054.107zM6.162 81.209c.573 0 1.038 1.61 1.038 3.6 0 1.987-.465 3.6-1.038 3.6-.574 0-1.039-1.613-1.039-3.6 0-1.99.465-3.6 1.04-3.6zm35.51 0c.575 0 1.04 1.61 1.04 3.6 0 1.987-.465 3.6-1.04 3.6-.572 0-1.037-1.613-1.037-3.6 0-1.99.465-3.6 1.038-3.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */