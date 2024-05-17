import { StyleSheet } from "../types/stylesheet.type";

export function createStyles<T extends StyleSheet>(properties: T): T {
  return properties;
}
