import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import { MdDateRange } from 'react-icons/md';

function NoteItem({ id, title, createdAt, body }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">
        <MdDateRange style={{ verticalAlign: 'middle', marginTop: '-2px', marginRight: '6px' }} />
        {showFormattedDate(createdAt)}
      </p>
      <div className="note-item__body">{parser(body)}</div>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
