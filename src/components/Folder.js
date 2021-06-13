import React,{useRef} from 'react'
import './Folder.css'
import FolderIcon from '../icons/folder.svg'
import { useContext } from 'react'
import { FolderContext } from '../App'
import ContextMenu from './ContextMenu'

const Folder = ({folder}) =>{
    const outerRef = useRef(null);
    const {path,setPath} = useContext(FolderContext)
    const handleClick = () =>{
        setPath([...path,folder.name])
    }
    return (
        <div className="folder" onClick={handleClick} ref={outerRef}>
            <div className="folder-icon">
                <img src={FolderIcon} alt=""/>
            </div>
            <div className="folder-name">
                <small>{folder.name}</small>
            </div>
            <ContextMenu outerRef={outerRef} type="foldercontext"/>
        </div>
    )
}
export default Folder