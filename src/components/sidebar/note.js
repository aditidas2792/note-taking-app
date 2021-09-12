import doc from '../../assets/doc.png';
/* 
Component to render the Note with name and part of body and 
last modified time
*/
const Note = (props) => {
  const listedNotes = props.list;
  if (listedNotes === null) {
    return null;
  } else {
    return listedNotes.map(({ id, title, category, body, lastModified }, i) => (
      <div key={i} className={`app-sidebar-note ${id === props.activeNote && 'active'}`} onClick={() => props.setActiveNote(id)}>
        <div className='sidebar-note-title'>
          <span>
            <img height='20' src={doc} alt={''} />
            <text className='padding-left'>{title}</text>
          </span>
          <button onClick={(e) => props.deleteNote(id)}>Delete</button>
        </div>

        <text>{body && body.substr(0, 100) + '...'}</text>
        <small>
          Last Modified{' '}
          {new Date(lastModified).toLocaleDateString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </small>
        {category !== '' && <small>Category: {category}</small>}
      </div>
    ));
  }
};

export default Note;
