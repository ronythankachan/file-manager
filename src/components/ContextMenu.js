import React from 'react'
import useContextMenu from './useContextMenu';

const ContextMenu = ({outerRef}) => {
    const { xPos, yPos, menu } = useContextMenu(outerRef)
    if (menu) {
      return (
        <div className="contextmenu" style={{position:"absolute", top: yPos, left: xPos }}>
            <div className="contextmenu-item">New Folder</div>
            <div className="contextmenu-item">Rename</div>
            <div className="contextmenu-item">Delete</div>
            <div className="contextmenu-item">Copy</div>
        </div>
      );
    }
    return <></>;

}

export default ContextMenu