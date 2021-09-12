import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './components/main';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [categories, setCategories] = useState(localStorage.categories ? JSON.parse(localStorage.categories) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('categories', JSON.stringify(categories));
    getActiveNote();

    // commented remove function, uncomment to clear data
    // localStorage.removeItem('notes');
    // localStorage.removeItem('categories');
  }, [notes, categories, activeNote]);

  // Function to create note obj and update notes Array
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      category: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  // Function to delete a note
  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  // Function to trigger to update a property of selected note
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
    getCategorisedNotes();
  };

  // Function to get active note
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  // Function to add new category and update categories Array
  const onAddCategory = (name) => {
    const newCategory = {
      id: uuid(),
      categoryName: name,
      counter: 0,
    };
    setCategories([newCategory, ...categories]);
    getCategoryList();
    getCategorisedNotes();
  };

  // List of categories to render in dropdown
  const getCategoryList = () => categories?.map((category) => category.categoryName ?? '');

  // Function to trigger counter for number of notes under a category
  // Currently not working correctly
  const getCategorisedNotes = () => {
    let counter = 0;
    notes.map((note, i) => {
      categories.map((category, j) => {
        if (note.category === category.categoryName) {
          counter++;
          return (category.counter += counter);
        }
      });
    });
    return counter;
  };

  return (
    <div className='App'>
      <Sidebar
        notes={notes}
        categories={categories}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onAddCategory={onAddCategory}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} categoryList={getCategoryList()} onAddCategory={onAddCategory} />
    </div>
  );
}

export default App;
