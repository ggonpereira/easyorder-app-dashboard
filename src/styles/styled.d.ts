import "styled-components";
import { DarkTheme } from "./themes/dark";

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
}
