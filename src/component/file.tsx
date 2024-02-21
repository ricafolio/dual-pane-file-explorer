interface FileProps {
  fileName: string;
  isActive: boolean;
}

export const File = (props: FileProps) => {
  const {fileName, isActive} = props
  return (
    <div id="file">
      <div className={`tree-item-self is-clickable nav-file-title tree-item-v2 ${isActive ? 'is-active' : ''}`}>
        <div className="tree-item-inner nav-file-title-content">{fileName}</div>
      </div>
    </div>
  )
};