import React from 'react'
import './Folder.css'
import FolderIcon from '../icons/folder.svg'
import { useContext } from 'react'
import { FolderContext } from '../App'

const Folder = ({folder}) =>{
    const {path,setPath} = useContext(FolderContext)
    const handleClick = () =>{
        setPath([...path,folder.name])
    }
    return (
        <div className="folder" onClick={handleClick}>
            <div className="folder-icon">
                <img src={FolderIcon} alt=""/>
            </div>
            <div className="folder-name">
                <small>{folder.name}</small>
            </div>
        </div>
    )
}
export default Folder