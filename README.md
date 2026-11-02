# 📝 Personal Notes App (Versi 1 - SPA Menggunakan React)

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![PropTypes](https://img.shields.io/badge/PropTypes-15.8.1-563D7C?style=for-the-badge)](https://www.npmjs.com/package/prop-types)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Submission 1:** _Membangun Single Page Application Menggunakan React_  
> Program **Belajar Fundamental Aplikasi Web dengan React** — **Dicoding Indonesia**  
> Kolaborasi Program **Asah led by Dicoding Supported by GoTo** & **PLK Akomodasi Klaim Universitas Negeri Yogyakarta (UNY) Studi Mandiri**.

---

## 📑 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Kriteria Submission & Fitur Lengkap](#-kriteria-submission--fitur-lengkap)
  - [Kriteria 1: Memanfaatkan React Router untuk Navigasi SPA](#kriteria-1-memanfaatkan-react-router-untuk-navigasi-spa)
  - [Kriteria 2: Menampilkan Daftar Catatan (Aktif & Arsip)](#kriteria-2-menampilkan-daftar-catatan-aktif--arsip)
  - [Kriteria 3: Menampilkan Detail Catatan Dinamis](#kriteria-3-menampilkan-detail-catatan-dinamis)
  - [Kriteria 4: Menambahkan Catatan Baru](#kriteria-4-menambahkan-catatan-baru)
  - [Kriteria 5: Menghapus Catatan](#kriteria-5-menghapus-catatan)
  - [Kriteria 6: Mengarsipkan & Mengembalikan Catatan](#kriteria-6-mengarsipkan--mengembalikan-catatan)
  - [Fitur Opsional & Standar Produksi (Target Nilai Maksimal)](#fitur-opsional--standar-produksi-target-nilai-maksimal)
- [Daftar Rute Halaman (Routing Matrix)](#-daftar-rute-halaman-routing-matrix)
- [Struktur Direktori](#-struktur-direktori)
- [Struktur Data Catatan](#-struktur-data-catatan)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Panduan Instalasi & Menjalankan Proyek](#-panduan-instalasi--menjalankan-proyek)
  - [Prasyarat](#prasyarat)
  - [Langkah Instalasi](#langkah-instalasi)
  - [Menjalankan Development Server](#menjalankan-development-server)
  - [Build untuk Produksi & Preview](#build-untuk-produksi--preview)
  - [Skrip NPM](#skrip-npm)
- [Panduan Pengujian Fitur Aplikasi](#-panduan-pengujian-fitur-aplikasi)
  - [1. Pengujian Navigasi & Client-Side Routing](#1-pengujian-navigasi--client-side-routing)
  - [2. Pengujian Tambah Catatan & Batasan Karakter](#2-pengujian-tambah-catatan--batasan-karakter)
  - [3. Pengujian Detail Catatan & Penanganan 404](#3-pengujian-detail-catatan--penanganan-404)
  - [4. Pengujian Fitur Arsip & Batal Arsip](#4-pengujian-fitur-arsip--batal-arsip)
  - [5. Pengujian Pencarian & Sinkronisasi URL Query](#5-pengujian-pencarian--sinkronisasi-url-query)
- [Dokumentasi Arsitektur & Keputusan Teknis](#-dokumentasi-arsitektur--keputusan-teknis)
- [Developer](#-developer)

---

## 📖 Tentang Proyek

**Personal Notes App (Versi 1)** adalah aplikasi pencatatan pribadi berbasis web yang dibangun dengan arsitektur **Single Page Application (SPA)** modern menggunakan library **React 18** dan bundler **Vite**. Proyek ini merupakan pemenuhan tugas **Submission Pertama** pada kelas *Belajar Fundamental Aplikasi Web dengan React* di Dicoding Indonesia.

Fokus pengembangan Versi 1 berpusat pada:
1. **Navigasi Mulus Tanpa Reload (Client-Side Routing):** Mengintegrasikan `react-router-dom` untuk menghadirkan pengalaman pengguna yang cepat, responsif, dan dinamis layaknya aplikasi native.
2. **Manajemen State Komponen & Data In-Memory:** Mengelola siklus hidup data catatan (pembuatan, pembacaan, pengarsipan, dan penghapusan) secara reaktif menggunakan hooks React serta modul data terisolasi.
3. **Pencarian Real-Time Tersinkronisasi URL:** Memanfaatkan URL Search Parameters (`useSearchParams`) sehingga status pencarian catatan dapat di-bookmark dan dibagikan (*shareable*).
4. **Keandalan & Standar Kode Bersih:** Menerapkan validasi tipe props yang ketat melalui **PropTypes**, antarmuka terstruktur dengan ikon interaktif dari **React Icons**, serta penataan tata letak menggunakan **Vanilla CSS** murni tanpa ketergantungan framework CSS pihak ketiga.

---

## 🏆 Kriteria Submission & Fitur Lengkap

### Kriteria 1: Memanfaatkan React Router untuk Navigasi SPA

- Aplikasi dikonfigurasi menggunakan `<BrowserRouter>` pada level root komponen (`src/index.jsx`).
- Perpindahan antar rute ditangani secara deklaratif menggunakan `<Routes>` dan `<Route>` pada `App.jsx`, serta komponen `<Link>` dan hook programatik `useNavigate`.
- Seluruh navigasi berjalan mulus di sisi klien (*client-side*) tanpa memicu *full page refresh* pada browser.
- Mendukung URL dinamis berbasis parameter (`/notes/:id`) dan penanganan rute wildcard (`*`) untuk rute yang tidak ditemukan.

### Kriteria 2: Menampilkan Daftar Catatan (Aktif & Arsip)

- Menampilkan daftar catatan aktif secara terstruktur di halaman utama (`HomePage`).
- Menampilkan daftar catatan yang telah diarsipkan secara terpisah di halaman arsip (`ArchivePage`).
- Masing-masing item catatan dirender dalam bentuk kartu (`NoteItem`) yang menampilkan judul catatan, tanggal pembuatan dengan format lokal bahasa Indonesia (`showFormattedDate`), serta cuplikan isi catatan.
- Mengimplementasikan komponen penampung modular (`NoteList`) yang otomatis menampilkan pesan dan ikon informatif ketika daftar catatan kosong (*empty state*).

### Kriteria 3: Menampilkan Detail Catatan Dinamis

- Mengakses halaman detail catatan melalui rute dinamis `/notes/:id`.
- Ekstraksi parameter ID dari URL secara aman menggunakan hook `useParams`.
- Mengambil data catatan dari sumber data lokal menggunakan fungsi helper `getNote(id)`.
- Merender format teks HTML pada body catatan secara aman menggunakan pustaka `html-react-parser`.
- Dilengkapi mekanisme penanganan kesalahan: jika ID catatan tidak ditemukan dalam basis data lokal, aplikasi otomatis menampilkan tampilan **404 Not Found**.

### Kriteria 4: Menambahkan Catatan Baru

- Menyediakan halaman khusus pembuatan catatan baru pada rute `/notes/new` (`AddPage`).
- Formulir input (`NoteInput`) menyediakan:
  - Input judul catatan dengan batasan maksimal **50 karakter**.
  - Indikator sisa karakter judul yang terhitung secara dinamis (*real-time character counter*).
  - Area isi catatan fleksibel berbasis elemen `contentEditable`.
  - Tombol aksi simpan (`MdCheck`) yang menginisiasi pembuatan entri catatan baru dengan penanda timestamp otomatis.
- Setelah proses penambahan berhasil, pengguna secara otomatis dialihkan (*redirect*) kembali ke halaman utama (`/`) menggunakan `useNavigate`.

### Kriteria 5: Menghapus Catatan

- Tersedia tombol aksi hapus catatan (`MdDelete`) pada halaman detail catatan.
- Memanggil fungsi penghapusan `deleteNote(id)` yang memfilter entri catatan terkait dari state data in-memory.
- Setelah catatan terhapus, aplikasi langsung mengarahkan pengguna kembali ke halaman utama.

### Kriteria 6: Mengarsipkan & Mengembalikan Catatan

- Tersedia tombol aksi pengarsipan dinamis pada halaman detail catatan:
  - Tombol **Arsipkan** (`MdArchive`) pada catatan yang sedang berstatus aktif (`archived: false`), memanggil `archiveNote(id)`.
  - Tombol **Batal Arsip** (`MdUnarchive`) pada catatan yang sedang berstatus arsip (`archived: true`), memanggil `unarchiveNote(id)`.
- Mengubah status boolean `archived` pada data catatan secara instan dan mengarahkan kembali navigasi ke halaman utama.

### Fitur Opsional & Standar Produksi (Target Nilai Maksimal)

- **Pencarian Real-Time Sinkron URL (`useSearchParams`):**
  - Mengintegrasikan komponen `SearchBar` pada halaman aktif maupun arsip.
  - Memfilter daftar catatan berdasarkan kata kunci judul secara real-time.
  - Nilai pencarian otomatis tersinkronisasi dua arah dengan parameter URL (`?keyword=...`), sehingga tautan dapat dibagikan atau dimuat ulang tanpa kehilangan status pencarian.
- **Validasi Tipe Data Runtime (PropTypes):**
  - Seluruh komponen penerima props (`NoteInput`, `NoteItem`, `NoteList`, `SearchBar`) dilengkapi definisi `propTypes` yang komprehensif (`isRequired`, validasi tipe string, fungsi, array of objects, dan `defaultProps`).
- **Halaman Penanganan Rute 404 (NotFoundPage):**
  - Menyediakan halaman kustom yang informatif ketika pengguna memasukkan URL yang tidak terdaftar atau mencari catatan yang telah terhapus.
  - Dilengkapi tombol navigasi untuk kembali ke halaman beranda.
- **Pure Vanilla CSS & Responsif:**
  - Desain antarmuka modern yang bersih dengan palet warna terstandar menggunakan variabel CSS (`--background`, `--surface`, `--primary`, `--text-main`, dll.).
  - Tata letak grid dan flexbox yang responsif untuk berbagai ukuran layar perangkat tanpa menggunakan CSS framework eksternal.

---

## 🧭 Daftar Rute Halaman (Routing Matrix)

| Path | Komponen Halaman | Parameter / Query | Deskripsi Fungsionalitas | Aksi yang Tersedia |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `HomePage` | `?keyword=` _(opsional)_ | Menampilkan seluruh daftar catatan aktif | Cari catatan, buka detail, navigasi tambah catatan |
| `/archives` | `ArchivePage` | `?keyword=` _(opsional)_ | Menampilkan seluruh daftar catatan terarsip | Cari catatan arsip, buka detail |
| `/notes/new` | `AddPage` | — | Formulir pembuatan catatan baru | Input judul (maks 50 char), isi catatan, simpan catatan |
| `/notes/:id` | `DetailPage` | `:id` _(path parameter)_ | Halaman rincian detail catatan | Baca lengkap, arsipkan / batal arsip, hapus catatan |
| `*` | `NotFoundPage` | — | Halaman penanganan rute tidak terdaftar | Tampilan pesan 404, navigasi kembali ke beranda |

---

## 📂 Struktur Direktori

```text
personal-notes-app-starter-v1/
├── public/                       # Aset publik statis (favicon, icons)
│   └── vite.svg
├── src/
│   ├── components/               # Komponen antarmuka modular (reusable UI)
│   │   ├── Navigation.jsx        # Bar navigasi header (judul aplikasi & tautan arsip)
│   │   ├── NoteInput.jsx         # Formulir input catatan & indikator sisa karakter
│   │   ├── NoteItem.jsx          # Kartu item catatan individual (judul, tanggal, cuplikan)
│   │   ├── NoteList.jsx          # Grid container daftar catatan & indikator kosong
│   │   └── SearchBar.jsx         # Bar pencarian catatan dengan ikon Material Design
│   ├── pages/                    # Halaman-halaman rute utama SPA
│   │   ├── AddPage.jsx           # Halaman pembuatan catatan baru (/notes/new)
│   │   ├── ArchivePage.jsx       # Halaman daftar catatan terarsip (/archives)
│   │   ├── DetailPage.jsx        # Halaman rincian catatan & aksi CRUD (/notes/:id)
│   │   ├── HomePage.jsx          # Halaman beranda daftar catatan aktif (/)
│   │   └── NotFoundPage.jsx      # Halaman penanganan 404 (rute tidak ditemukan)
│   ├── styles/                   # Lembar gaya aplikasi
│   │   └── style.css             # Vanilla CSS murni dengan CSS Variables
│   ├── utils/                    # Data in-memory & helper utilitas
│   │   ├── index.js              # Helper pemformatan tanggal lokal Indonesia (id-ID)
│   │   └── local-data.js         # Sumber data lokal in-memory & fungsi CRUD
│   ├── App.jsx                   # Root component & konfigurasi routing aplikasi
│   └── index.jsx                 # Entry point utama React DOM (<BrowserRouter>)
├── .gitignore                    # Berkas konfigurasi pengabaian Git
├── index.html                    # Kerangka dokumen HTML utama & Google Fonts
├── package.json                  # Konfigurasi dependensi, metadata & skrip NPM
├── package-lock.json             # Kunci versi dependensi npm
├── vite.config.js                # Konfigurasi build tool Vite
└── README.md                     # Dokumentasi komprehensif proyek
```

---

## 🗄️ Struktur Data Catatan

Sumber data in-memory dikelola pada berkas `src/utils/local-data.js` dengan skema objek catatan sebagai berikut:

```javascript
{
  id: 'notes-1',
  title: 'Babel',
  body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+...',
  createdAt: '2022-04-14T04:27:34.572Z',
  archived: false
}
```

### Kamus Atribut Data

| Field | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | `String` | Identifier unik catatan (format: `notes-<timestamp>` atau `notes-<number>`) |
| `title` | `String` | Judul catatan (maksimal 50 karakter pada input formulir) |
| `body` | `String` | Isi lengkap catatan, mendukung format string HTML |
| `createdAt` | `String` | Tanggal pembuatan catatan dalam format ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`) |
| `archived` | `Boolean` | Penanda status pengarsipan catatan (`false` = aktif, `true` = arsip) |

### Fungsi Operasi Data Layer (`src/utils/local-data.js`)

- `getAllNotes()`: Mengambil seluruh koleksi catatan.
- `getActiveNotes()`: Mengambil catatan dengan nilai `archived: false`.
- `getArchivedNotes()`: Mengambil catatan dengan nilai `archived: true`.
- `getNote(id)`: Menemukan satu catatan spesifik berdasarkan atribut `id`.
- `addNote({ title, body })`: Menambahkan catatan baru ke array dengan timestamp saat itu dan nilai default `archived: false`.
- `deleteNote(id)`: Menghapus catatan dari array data berdasarkan `id`.
- `archiveNote(id)`: Mengubah status `archived` catatan menjadi `true`.
- `unarchiveNote(id)`: Mengubah status `archived` catatan menjadi `false`.

---

## 💻 Teknologi yang Digunakan

- **Library Utama:** [React](https://react.dev/) v18.2.0 (Functional Components & Hooks)
- **Build Tool & Development Server:** [Vite](https://vitejs.dev/) v4.2.0
- **Client-Side Routing:** [React Router](https://reactrouter.com/) v7.18.4 (kompatibel dengan arsitektur v6)
- **Runtime Type Checking:** [PropTypes](https://www.npmjs.com/package/prop-types) v15.8.1
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) v5.7.0 (`react-icons/md` - Material Design)
- **HTML Parsing:** [HTML React Parser](https://www.npmjs.com/package/html-react-parser) v6.1.8
- **Typography:** [Google Fonts](https://fonts.google.com/) — *Inter* (Weight: 300, 400, 700)
- **Styling:** Pure Vanilla CSS (CSS Custom Properties, Flexbox, & CSS Grid)

---

## 🛠️ Panduan Instalasi & Menjalankan Proyek

### Prasyarat

Sebelum memulai, pastikan perangkat komputer Anda telah terinstal:
- **Node.js** versi **16.x** atau lebih baru (disarankan menggunakan versi LTS terbaru).
- **npm** (Node Package Manager) bawaan Node.js.

### Langkah Instalasi

1. **Clone repositori proyek:**
   ```bash
   git clone https://github.com/alfinhimawan/Proyek-Membangun-Single-Page-Application-Menggunakan-React.git
   ```

2. **Masuk ke direktori proyek:**
   ```bash
   cd Proyek-Membangun-Single-Page-Application-Menggunakan-React
   ```

3. **Install seluruh dependensi:**
   ```bash
   npm install
   ```

### Menjalankan Development Server

Jalankan perintah berikut untuk memulai server pengembangan lokal dengan fitur *Hot Module Replacement (HMR)*:

```bash
npm run dev
```

Setelah server aktif, buka peramban (*browser*) dan akses alamat lokal:
```text
http://localhost:5173
```

### Build untuk Produksi & Preview

1. **Kompilasi bundle produksi:**
   ```bash
   npm run build
   ```
   *Hasil kompilasi file yang telah dioptimasi, diminifikasi, dan di-tree-shake akan tersimpan pada direktori `dist/`.*

2. **Pratinjau hasil build secara lokal:**
   ```bash
   npm run preview
   ```

### Skrip NPM

| Perintah | Deskripsi Fungsionalitas |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan Vite lokal dengan HMR pada port `5173` |
| `npm run build` | Mengompilasi dan mengoptimasi seluruh berkas ke dalam direktori produksi `dist/` |
| `npm run preview` | Menjalankan web server lokal untuk meninjau secara langsung keluaran build `dist/` |

---

## 🧪 Panduan Pengujian Fitur Aplikasi

Berikut panduan langkah demi langkah untuk menguji seluruh fitur yang telah dibangun:

### 1. Pengujian Navigasi & Client-Side Routing
1. Buka aplikasi di peramban pada alamat `http://localhost:5173`.
2. Klik menu **Arsip** pada navigasi header. Pastikan URL berubah menjadi `/archives` dan halaman menampilkan daftar catatan arsip tanpa reload browser.
3. Klik judul aplikasi **Aplikasi Catatan** di header. Pastikan halaman kembali ke rute beranda `/`.
4. Klik tombol tambah (`+`) di pojok kanan bawah beranda. Pastikan URL berpindah ke `/notes/new`.

### 2. Pengujian Tambah Catatan & Batasan Karakter
1. Pada halaman `/notes/new`, amati teks **Sisa karakter: 50**.
2. Masukkan judul catatan. Perhatikan bahwa angka sisa karakter berkurang secara dinamis.
3. Masukkan teks lebih dari 50 karakter pada kolom judul. Pastikan input berhenti menerima karakter ketika sisa karakter mencapai `0`.
4. Isi badan catatan pada area body.
5. Klik tombol centang simpan. Pastikan aplikasi langsung dialihkan ke halaman utama (`/`) dan catatan baru muncul pada posisi teratas daftar catatan aktif.

### 3. Pengujian Detail Catatan & Penanganan 404
1. Klik salah satu judul catatan pada daftar beranda.
2. Pastikan peramban membuka rute `/notes/:id` yang sesuai, menampilkan judul lengkap, format tanggal Indonesia (contoh: *Kamis, 14 April 2022*), dan seluruh teks catatan.
3. Ubah ID pada bilah URL browser menjadi ID yang tidak valid (contoh: `http://localhost:5173/notes/id-asal`).
4. Pastikan tampilan langsung menampilkan halaman **404 Halaman tidak ditemukan** beserta tautan **Kembali ke Beranda**.

### 4. Pengujian Fitur Arsip & Batal Arsip
1. Buka salah satu detail catatan aktif.
2. Klik tombol **Arsipkan** (ikon arsip). Aplikasi akan kembali ke beranda, dan catatan tersebut tidak lagi muncul di daftar catatan aktif.
3. Buka halaman **Arsip** (`/archives`). Pastikan catatan yang baru diarsipkan muncul pada halaman ini.
4. Klik catatan tersebut untuk membuka detailnya. Tombol aksi kini berubah menjadi **Batal Arsip**.
5. Klik tombol **Batal Arsip**. Catatan akan dikembalikan ke daftar catatan aktif di halaman beranda.

### 5. Pengujian Pencarian & Sinkronisasi URL Query
1. Pada halaman utama atau halaman arsip, ketikkan kata kunci tertentu pada bilah pencarian (contoh: `Babel`).
2. Pastikan daftar catatan langsung terfilter hanya menampilkan judul yang sesuai kata kunci.
3. Perhatikan bilah alamat browser, parameter URL otomatis terisi `?keyword=Babel`.
4. Salin URL tersebut dan buka pada tab peramban baru, atau lakukan *refresh* halaman. Pastikan kolom pencarian tetap terisi `Babel` dan hasil filter tetap tersaring secara konsisten.
5. Hapus kata kunci pada bilah pencarian hingga kosong, dan seluruh catatan akan ditampilkan kembali.

---

## 🏛️ Dokumentasi Arsitektur & Keputusan Teknis

### 1. Client-Side Routing & SPA Lifecycle
Penggunaan `react-router-dom` memungkinkan perenderan halaman secara bersyarat (*conditional rendering*) berdasarkan URL tanpa meminta dokumen HTML baru ke server. Hal ini mengeliminasi kedipan layar putih (*white flash*) saat berpindah halaman dan menjaga state in-memory aplikasi tetap persisten selama pengguna berinteraksi.

### 2. Data Layer Terpusat & In-Memory State (`local-data.js`)
Seluruh operasi manipulasi data (tambah, arsip, batal arsip, dan hapus) diabstraksikan ke dalam fungsi-fungsi murni pada `src/utils/local-data.js`. Komponen halaman seperti `HomePage` dan `ArchivePage` memanfaatkan hook `useState` dan `useEffect` untuk menyinkronkan data array in-memory ke dalam siklus hidup komponen React.

### 3. Sinkronisasi Dua Arah State Pencarian dengan URL (`useSearchParams`)
Daripada hanya menyimpan kata kunci pencarian pada local state komponen, aplikasi memanfaatkan hook `useSearchParams` dari React Router. Pendekatan ini memastikan prinsip *Single Source of Truth* pada URL, sehingga pengguna dapat membagikan tautan pencarian kepada orang lain atau melakukan navigasi *back/forward* browser dengan riwayat pencarian yang tetap terjaga.

### 4. Input Berbasis `contentEditable` & Parsing Konten HTML
Untuk memberikan pengalaman penulisan catatan yang fleksibel dan luas, area formulir body catatan menggunakan elemen `div` dengan atribut `contentEditable`. Konten yang tersimpan diurai menggunakan pustaka `html-react-parser` pada komponen `NoteItem` dan `DetailPage`, memungkinkan perenderan baris baru dan struktur teks yang kaya secara aman.

### 5. Jaminan Keandalan Kode melalui PropTypes
Mengingat aplikasi dibangun menggunakan JavaScript murni (tanpa TypeScript), validasi kontrak antarkomponen ditegakkan menggunakan **PropTypes**. Setiap komponen mendefinisikan tipe data yang diterima secara eksplisit, memudahkan proses pelacakan bug (*debugging*) dan mencegah *runtime error* akibat data yang tidak sesuai.

---

## 👨‍💻 Developer

- **Nama:** Alfin Himawan Santosa
- **Program:** Asah led by Dicoding Supported by GoTo — PLK Akomodasi Klaim Universitas Negeri Yogyakarta (UNY) Studi Mandiri
- **Dicoding Profile:** [alfinhimawan](https://www.dicoding.com/users/alfinhimawan/academies)
- **GitHub:** [@alfinhimawan](https://github.com/alfinhimawan)
