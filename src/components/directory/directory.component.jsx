import sections from "./directory.data";
import MenuItem from "../../components/menu-item/menu-item.component";
import './directory.styles.scss'
const Directory =()=>(
  <div className="directory-menu">
    {sections.map(({title,imageUrl,id})=>(<MenuItem title={title} key={id} imageUrl={imageUrl}/>)
      
    )}
  </div>
)
export default Directory;