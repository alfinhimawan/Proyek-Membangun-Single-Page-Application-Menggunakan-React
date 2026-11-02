import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>404</h2>
      <p style={{ fontSize: '24px', color: 'var(--on-background-grey)', marginBottom: '32px' }}>Halaman tidak ditemukan</p>
      <Link to="/" style={{ textDecoration: 'underline', color: 'var(--on-background)' }}>
        Kembali ke Beranda
      </Link>
    </section>
  );
}

export default NotFoundPage;
