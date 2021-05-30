import MenuItem from '../menu-item/menu-item.component';
import { useState } from 'react';
import SECTION_DATA from './directory.data';
import './directory.styles.scss';

const Directory = () => {
  const [sections, setSections] = useState(SECTION_DATA);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
