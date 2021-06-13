import React from 'react'
import { useContext } from 'react'
import { FolderContext } from '../App'

const sidebarItems = ['Home','Movies','Documents','My Files']
const Sidebar = () => {
    const {setPath} = useContext(FolderContext)
    const handleClick = (newPath) =>{
        setPath([newPath])
    }
    return (
        <div className="sidebar">
            <Toolbar/>
            {
                sidebarItems.map((item,index) =>{
                    return <div className="sidebar-item" value={item} onClick={()=>handleClick(item)} key={index}>{item}</div>
                })
            }
        </div>
    )
}

export default Sidebar

const Toolbar = () =>{
    return (
        <div className="toolbar">
            <div className="toolbar-icon close"></div>
            <div className="toolbar-icon minimize"></div>
            <div className="toolbar-icon maximize"></div>
        </div>
    )
}
