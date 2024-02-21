import { File } from "./file";

export const RightPane = () => {
  return (
    <aside id="right-pane">
      <b>Folder name</b>
      <div className="files">
        {[...Array(5)].map((x, i) =>
          <File
            key={`file-${i}`}
            fileName={`Untitled ${i}`}
            isActive={i===0}
          />
        )}
      </div>
    </aside>
  )
}