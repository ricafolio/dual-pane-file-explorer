import { Folder } from "./folder";

export const LeftPane = () => {
  return (
    <aside id="left-pane">
      <b>Vault name</b>
      <div className="folders">
        {[...Array(20)].map((x, i) =>
          <Folder
            key={`folder-${i}`}
            folderName={`Folder name ${i}`}
            isActive={i === 0}
          />
        )}
      </div>
    </aside>
  )
};