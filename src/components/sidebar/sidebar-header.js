import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import addDoc from '../../assets/add-document.png';
import addFolder from '../../assets/add-folder.png';
/* 
Component to render the Sidebar Header
Includes buttons to add new note or folder/category
Also, renders the input field to enter new category name
*/
const SideBarHeader = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [categoryValue, setCategoryValue] = useState('');

  // On show the input field to add new category name
  const showInputField = () => {
    if (categoryValue !== null) {
      setCategoryValue('');
    }
    setShowInput(true);
  };

  // Function to add new category and reset input visibility
  const addToCategory = () => {
    props.addCategory(categoryValue);
    setShowInput(false);
  };

  return (
    <div>
      <div className='app-sidebar-header app-title'>
        <h1>Note Taking App</h1>
      </div>

      <div className='app-sidebar-header'>
        <button onClick={props.addNote}>
          <img height='30' src={addDoc} alt={''} />
        </button>
        <button className='padding-left' onClick={showInputField}>
          <img height='30' src={addFolder} alt={''} />
        </button>
      </div>
      <div className='search-bar'>
        {showInput && (
          <InputGroup>
            <Form.Control
              className='search-bar'
              type='text'
              id='category'
              placeholder='Add a category name'
              value={categoryValue}
              onChange={(event) => {
                setCategoryValue(event.target.value);
              }}
            />
            <Button onClick={addToCategory}>Save</Button>
          </InputGroup>
        )}
      </div>
    </div>
  );
};

export default SideBarHeader;
