interface FolderProps {
  folderName: string;
  isActive: boolean;
}

export const Folder = (props: FolderProps) => {
  const { folderName, isActive } = props

  return (
    <div id="folder" className={`tree-item-self nav-folder-title ${isActive ? 'is-active' : ''}`}>
      <div className="tree-item-icon collapse-icon nav-folder-collapse-indicator is-collapsed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon right-triangle"><path d="M3 8L12 17L21 8"></path></svg>
      </div>
      <div className="tree-item-inner nav-folder-title-content">{folderName}</div>
    </div>
  )
};