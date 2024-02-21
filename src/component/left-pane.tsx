import { Folder } from "./folder";

export const LeftPane = () => {
  return (
    <aside id="left-pane">
      <b>Vault name</b>
      <div className="folders">
        {[...Array(10)].map((i) => <Folder key={`folder-${i}`} />)}
      </div>
    </aside>
  )
};