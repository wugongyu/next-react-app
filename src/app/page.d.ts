import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getPageLayout: (_page: ReactElement) => ReactNode,
  layout: ComponentType,
} 
