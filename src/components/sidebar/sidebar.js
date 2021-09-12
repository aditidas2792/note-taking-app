import Folder from './folder';
import Note from './note';
import SearchBar from './searchbar';
import SideBarHeader from './sidebar-header';
/* 
Component to render the Sidebar
Includes notes list, category list and sidebar header
*/
const Sidebar = ({ notes, categories, onAddNote, onDeleteNote, activeNote, setActiveNote, onAddCategory }) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const sortedCategories = categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));

  // set selected note to show on Main component
  const makeActiveNote = (note) => {
    if (note != null) {
      setActiveNote(note.id);
    }
  };

  return (
    <div className='app-sidebar'>
      <SideBarHeader addNote={onAddNote} addCategory={onAddCategory} />
      <div>
        <SearchBar
          id={'find-notes'}
          labelKey='title'
          options={notes}
          onChange={(selected) => {
            makeActiveNote(selected);
          }}
          onClick={(selected) => {
            makeActiveNote(selected);
          }}
        />
      </div>
      <div className='app-sidebar-folders'>
        <Folder list={sortedCategories} />
      </div>
      <div className='app-sidebar-notes'>
        <Note list={sortedNotes} activeNote={activeNote} setActiveNote={setActiveNote} deleteNote={onDeleteNote} />
      </div>
    </div>
  );
};

export default Sidebar;
