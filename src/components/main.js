import { Form, InputGroup } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
/* 
Component to render the Note editable section and Note in Markdown section
*/
const Main = ({ activeNote, onUpdateNote, categoryList }) => {
  let title;
  let optionList = categoryList.length > 0 ? categoryList : [];

  // Update note obj values if any changes
  const onEditField = (field, value) => {
    console.log(field, value);
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className='no-active-note'>No Active Note</div>;

  return (
    <div className='app-main'>
      <div className='row app-main-note-edit'>
        <div className='col-lg-6'>
          <InputGroup>
            <Form.Control
              className='new-input'
              type='text'
              id='title'
              placeholder='Untitled Note'
              value={title}
              onChange={(e) => onEditField('title', e.target.value)}
              autoFocus
            />
          </InputGroup>
          <InputGroup>
            <Form.Select
              defaultValue={'Category Name'}
              onChange={(event) => {
                if (event.target.value !== -1) {
                  onEditField('category', event.target.value);
                }
              }}>
              <option value={-1}>Select a category</option>
              {optionList.map((optionItem, index) => (
                <option value={optionItem}>{optionItem ?? ''}</option>
              ))}
            </Form.Select>
          </InputGroup>
        </div>
        <div className='col-lg-6'>
          <InputGroup>
            <Form.Control
              as='textarea'
              id='body'
              placeholder='Write your note here...'
              value={activeNote.body}
              onChange={(e) => onEditField('body', e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <ReactMarkdown className='markdown-preview'>{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
