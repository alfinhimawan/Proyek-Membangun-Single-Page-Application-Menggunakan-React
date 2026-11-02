import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { MdAdd, MdEventNote } from 'react-icons/md';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2><MdEventNote style={{ verticalAlign: 'middle', marginTop: '-4px', marginRight: '8px', color: 'var(--text-muted)' }} />Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} emptyMessage="Tidak ada catatan" />
      <div className="homepage__action">
        <Link to="/notes/new">
          <button className="action" type="button" title="Tambah">
            <MdAdd />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
