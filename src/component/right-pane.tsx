import { File } from "./file";

export const RightPane = () => {
  return (
    <aside id="right-pane">
      <b>Folder name</b>
      <div className="files">
        {[...Array(5)].map((i) => <File key={`file-${i}`} />)}
      </div>
    </aside>
  )
}