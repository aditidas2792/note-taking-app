import folder from '../../assets/folder.png';
/* 
Component to render the Category name and number of notes under that
category for each different categories created
*/
const Folder = (props) => {
  const listCategories = props.list;

  if (listCategories === null) {
    return null;
  } else {
    return listCategories.map(({ id, categoryName, counter }, i) => (
      <div key={id}>
        <div className='sidebar-note-folder'>
          <span>
            <img height='20' src={folder} alt={''} />
            <text className='padding-left'>{categoryName}</text>
          </span>
          <div>{counter}</div>
        </div>
      </div>
    ));
  }
};

export default Folder;
