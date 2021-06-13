import React,{useState,useEffect} from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import FileView from './components/FileView';

export const FolderContext = React.createContext();
const foldersInitialValues =[
    {
        parent:'Home',
        name:'English',
        type:'folder',
    },
    {
      parent:'Home',
      name:'Malayalam',
      type:'folder',
    },
    {
      parent:'Movies',
      name:'Sevens',
      type:'folder',
    },
    {
      parent:'Movies',
      name:'ShawShank Redemption',
      type:'folder',
    },
    {
      parent:'Movies',
      name:'Avengers',
      type:'folder',
    },
    {
      parent:'Documents',
      name:'SSLC Certificate',
      type:'folder',
    },
    {
      parent:'Documents',
      name:'Degree Lessons',
      type:'folder',
    },
    {
      parent:'Sevens',
      name:'First',
      type:'folder',
    },
    {
      parent:'Sevens',
      name:'Second',
      type:'folder',
    }
]


function App() {
  const [library] = useState(foldersInitialValues)
  const [folders,setFolders] =useState([])
  const [path,setPath] =useState(["Home"])

  useEffect(() => {
    console.log(path)
    setFolders(library.filter(folder=>folder.parent===path.slice(-1)[0]).map(folder=>folder))
    // eslint-disable-next-line
  }, [path])


  return (
    <div>
      <div className="homepage">
        <div className="explorer">
          <FolderContext.Provider value={{folders,setFolders,path,setPath}}>
            <Sidebar/>
            <FileView/>
          </FolderContext.Provider>
          </div>
        </div>
      </div>
  );
}

export default App;
