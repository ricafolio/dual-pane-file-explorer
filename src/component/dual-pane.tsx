import { LeftPane } from "./left-pane";
import { RightPane } from "./right-pane";

export const DualPane = () => {
  return (
    <div className="dual-pane-container">
      <LeftPane />
      <RightPane />
    </div>
  );
};
