import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { MdArchive } from 'react-icons/md';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archives-page">
      <h2><MdArchive style={{ verticalAlign: 'middle', marginTop: '-4px', marginRight: '8px', color: 'var(--text-muted)' }} />Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} emptyMessage="Arsip kosong" />
    </section>
  );
}

export default ArchivePage;
