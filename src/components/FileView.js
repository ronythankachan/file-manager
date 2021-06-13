import React,{useContext} from 'react'
import {FolderContext} from '../App'
import Folder from './Folder'

const FileView = () => {
    const {folders,path} = useContext(FolderContext);
    return (
        <div className="fileview">
            <Navigation path={path} poppedPaths setPoppedPaths />
            <FolderView folders={folders}/>
        </div>
    )
}

export default FileView 



const Navigation = ({path}) =>{
    const pathHistory = path.reduce((prev,curr)=>prev+'/'+curr)
    const goToPrev = () =>{
        
    }
    const goToNext = () =>{

    }
    return (
        <div className="navigation">
            <div className="navigation-buttons">
                <button onClick={goToPrev}>{'<'}</button>
                <button onClick={goToNext}>{'>'}</button>
            </div>
            <div className="navigation-path">{pathHistory}</div>
        </div>
    )
}

const FolderView = ({folders}) => {
    return(
        <div className="folderview">
            {
                folders.map((folder,index) =>{
                    return <Folder folder = {folder} key={index}/>
                })
            }
        </div>
    )
}