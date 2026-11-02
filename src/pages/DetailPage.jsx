import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import { MdDelete, MdArchive, MdUnarchive, MdDateRange } from 'react-icons/md';
import NotFoundPage from './NotFoundPage';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchedNote = getNote(id);
    setNote(fetchedNote || null);
    setInitializing(false);
  }, [id]);

  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = () => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchiveHandler = () => {
    unarchiveNote(id);
    navigate('/');
  };

  if (initializing) {
    return null;
  }

  if (note === null) {
    return <NotFoundPage />;
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        <MdDateRange style={{ verticalAlign: 'middle', marginTop: '-2px', marginRight: '6px' }} />
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{parser(note.body)}</div>

      <div className="detail-page__action">
        {note.archived ? (
          <button className="action" onClick={onUnarchiveHandler} title="Batal Arsip">
            <MdUnarchive />
          </button>
        ) : (
          <button className="action" onClick={onArchiveHandler} title="Arsipkan">
            <MdArchive />
          </button>
        )}
        <button className="action" onClick={onDeleteHandler} title="Hapus">
          <MdDelete />
        </button>
      </div>
    </section>
  );
}

export default DetailPage;
