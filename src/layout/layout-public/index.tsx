import { ReactElement, useEffect, useState } from "react";
import style from "./style.module.scss";
import Header from '../header';
import FooterDesign from '../footer';

interface IProps {
    children: ReactElement;
  }

export default function LayoutPublic ({ children }: IProps) {
  return (
    <main className={style.mainLayout}>
      <Header />
      <div className={style.content}> {children}</div>
      <FooterDesign />
    </main>
  );
}
