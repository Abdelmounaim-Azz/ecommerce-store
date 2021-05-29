import sections from "./directory.data";
import MenuItem from "../../components/menu-item/menu-item.component";
import './directory.styles.scss'
const Directory =()=>(
  <div className="directory-menu">
    {sections.map(({id,...restOfSectionProps})=>(<MenuItem  key={id} {...restOfSectionProps}/>)
    )}
  </div>
)
export default Directory;