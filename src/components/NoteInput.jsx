import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleLimit = 50;

  const onTitleChange = (event) => {
    const inputTitle = event.target.value;
    if (inputTitle.length <= titleLimit) {
      setTitle(inputTitle);
    }
  };

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmit = () => {
    addNote({ title, body });
  };

  return (
    <div className="add-new-page__input">
      <div>
        <input 
          className="add-new-page__input__title" 
          placeholder="Catatan rahasia" 
          value={title} 
          onChange={onTitleChange} 
        />
        <p className="note-input__title-limit">
          Sisa karakter: {titleLimit - title.length}
        </p>
      </div>
      <div 
        className="add-new-page__input__body" 
        data-placeholder="Sebenarnya saya adalah ...." 
        contentEditable 
        onInput={onBodyChange} 
      />
      <div className="add-new-page__action">
        <button className="action" type="button" title="Simpan" onClick={onSubmit}>
          <MdCheck />
        </button>
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
