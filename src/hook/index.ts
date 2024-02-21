import { useContext } from "react";
import { AppContext } from "../dual-pane-view";
import { App } from "obsidian";

export const useApp = (): App | undefined => {
  return useContext(AppContext);
};
