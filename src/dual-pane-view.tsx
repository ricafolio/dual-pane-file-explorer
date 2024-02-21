import { App, ItemView, WorkspaceLeaf } from "obsidian";
import { StrictMode, createContext } from "react";
import { Root, createRoot } from "react-dom/client";
import { DualPane } from "./component/dual-pane";

export const AppContext = createContext<App | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class DualPaneView extends ItemView {
  root: Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return "dual-pane-view";
  }

  getDisplayText() {
    return "Dual Pane View";
  }

  getIcon() {
    return "columns"
  }

  async onOpen() {
    this.destroy();
    this.root = createRoot(this.containerEl.children[1]);
    this.root.render(
      <StrictMode>
        <AppContext.Provider value={this.app}>
          <DualPane />
        </AppContext.Provider>
      </StrictMode>
    );
  }

  async onClose() {
    this.destroy();
  }

  destroy() {
    this.root?.unmount();
  }
}
