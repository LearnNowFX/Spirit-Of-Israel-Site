import { CSSProperties } from "react";

type StyleSheetGenrator = <T extends Record<string, any>>(props: T) => CSSProperties;
export type StyleSheet = { [key: string]: CSSProperties | StyleSheetGenrator };
