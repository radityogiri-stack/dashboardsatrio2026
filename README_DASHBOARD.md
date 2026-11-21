# Dashboard Monitoring Sales Supervisor - Tunas Toyota Bekasi 2026

Dashboard monitoring berbasis web interaktif, modern, dan lengkap yang dirancang khusus untuk memantau performa penjualan Sales Supervisor (SPV Satriyo Kresno Aji & SPV Yames Reimond), unit **RS AFI berdasarkan tipe kendaraan**, analisis pertumbuhan bulanan (**MoM Growth %**), akumulasi kumulatif **YTM (Year-To-Month)**, perbandingan **Kuartal (Q1–Q4)**, metode pembayaran (Cash vs Kredit), pangsa leasing, prospek Trade-In, piutang AR, hingga analisis pangsa pasar (**Polreg / Market Share**).

Dashboard ini terhubung langsung secara otomatis (*real-time auto-sync*) dengan spreadsheet Google Drive Anda:
🔗 **Link Spreadsheet**: [Monitoring SPV (WEB)](https://docs.google.com/spreadsheets/d/18xqd8Y0P6USeSdvWehKKEFa6UExCrTAvW12RaRVZTuc/edit?gid=1815908456#gid=1815908456)

---

## 🔍 Hasil Analisis Elemen Spreadsheet Google Drive

Berdasarkan penelusuran menyeluruh terhadap file spreadsheet Google Drive di atas, buku kerja (*workbook*) **"Monitoring SPV (WEB)"** terdiri dari 5 sheet utama yang saling terintegrasi:

| No | Nama Sheet / Tab | GID | Jumlah Data | Deskripsi & Fungsi Elemen |
|:--:|:-----------------|:---:|:-----------:|:--------------------------|
| 1 | **RS Bekasi** | *Sheet Tab* | 914 baris | **Basis Data Penjualan RS AFI**: Berisi seluruh transaksi aktual per unit mobil Toyota. Mencakup nomor SPK, tanggal transaksi, kode sales, nama salesman, model, tipe kendaraan (*TYPE GRP*), jumlah unit (*Qty*), bulan (*Bulan*), dan penanggung jawab Supervisor (**SPV SATRIYO KRESNO AJI** dan **SPV YAMES REIMOND**). |
| 2 | **Dashboard Achievement** | *Sheet Tab* | 48 baris | **Matriks KPI & Finansial**: Target vs Realisasi bulanan cabang Bekasi dan SPV Satrio, persentase *Achievement*, rasio Cash vs Kredit, porsi leasing (**TVC/TAF, MTF, Others**), serta performa finansial (*Revenue, Gross Profit, Opex, PBT*). |
| 3 | **Trade In** | *Sheet Tab* | 60 baris | **Monitoring Tukar Tambah**: Funnel prospek penggantian mobil (*Replacement Prospek* $\rightarrow$ *Appraisal Selesai* $\rightarrow$ *Deal* $\rightarrow$ *Delivery Order/DO*), sebaran merek mobil lama pelanggan, dan rekanan pembeli (*Showroom Rekanan vs OLXmobbi*). |
| 4 | **AR (Accounts Receivable)** | `gid=0` | 1.906 baris | **Monitoring Piutang & Aging**: Nilai total invoice penagihan ke perusahaan leasing/pelanggan, pembayaran yang sudah cair (*receipt*), dan saldo tertunggak (*Outstanding Balance Overdue*). |
| 5 | **Polreg** | `gid=1815908456` | 132.288 baris | **Pangsa Pasar & Registrasi Wilayah**: Tab yang aktif saat link Google Drive disalin. Berisi data registrasi kendaraan bermotor Samsat di area Jabodetabek/Depok/Bekasi berdasarkan merk, tipe, segmen, teknologi penggerak (BEV Listrik, Hybrid HEV, Bensin Konvensional ICE), dan wilayah. |

---

## 🚀 Cara Membuka Dashboard

Anda dapat langsung membuka dashboard dengan 2 cara mudah:

1. **Cara 1 (Paling Cepat - 1 Klik)**:
   - Cukup klik dua kali (*double click*) file **`Buka_Dashboard.bat`**.
   - Dashboard akan langsung terbuka secara otomatis di browser default Anda (Chrome, Edge, Firefox, Brave, dll).
2. **Cara 2 (Buka Langsung File HTML)**:
   - Buka file **`index.html`** langsung menggunakan browser apa pun.
   - Tidak membutuhkan instalasi server atau software tambahan.

---

## 🔄 Cara Kerja Auto-Update Real-Time dari Google Sheets

Dashboard ini dilengkapi dengan **teknologi Auto-Sync Multi-Layer**:

### 1. Direct Live Sync (Otomatis Aktif Tanpa Perlu Konfigurasi Apapun)
- Dashboard secara langsung terhubung ke Spreadsheet ID: `18xqd8Y0P6USeSdvWehKKEFa6UExCrTAvW12RaRVZTuc`.
- Memanfaatkan protokol **Google Visualization JSONP Engine** yang aman dari kendala CORS di browser.
- **Setiap kali Anda mengedit, menambah data SPK baru, atau mengubah angka di Google Sheets**, web dashboard akan secara otomatis mengambil update data terbaru setiap interval tertentu (default: **Tiap 30 Detik**).
- Angka pada kartu (*scorecards*), grafik batang, grafik garis pertumbuhan MoM, matriks tipe kendaraan, hingga peringkat salesman akan **langsung ter-refresh secara otomatis** tanpa perlu me-reload halaman browser!
- Anda juga dapat menekan tombol **"Sinkronkan"** di pojok kanan atas kapan saja untuk memaksa update instan.

### 2. Opsi Google Apps Script Web App (Alternatif API)
Jika di masa mendatang spreadsheet ingin dibuat privat atau membutuhkan endpoint kustom:
1. Buka spreadsheet Google Drive &rarr; klik menu **Extensions (Ekstensi)** &rarr; **Apps Script**.
2. Salin isi file **`Code_Dashboard_Sync.gs`** ke editor Apps Script.
3. Klik tombol biru **Deploy** &rarr; **New deployment** &rarr; pilih jenis **Web app** (Who has access: *Anyone*).
4. Salin Web App URL tersebut, klik tombol **Google Sheets** di pojok kanan atas dashboard, lalu tempel (*paste*) URL tersebut.

### 3. Preloaded Offline Fallback
- File **`dataset.js`** menyimpan cadangan data awal berkecepatan tinggi (*zero-latency*).
- Jika perangkat Anda sedang tidak terkoneksi ke internet atau Google Sheets sedang mengalami gangguan jaringan, dashboard tetap dapat dibuka seketika dalam hitungan milidetik tanpa layar putih (*blank screen*).

---

## 📊 Panduan Fitur & Navigasi Menu Dashboard

### 1. Filter Interaktif Lengkap (Filter Bar)
* **Filter Supervisor**:
  * `SATRIYO KRESNO AJI`: Memfilter seluruh KPI, RS AFI, dan salesman di bawah koordinasi SPV Satrio.
  * `YAMES REIMOND`: Memfilter performa penjualan di bawah koordinasi SPV Yames.
  * `SEMUA SPV (CABANG BEKASI)`: Menampilkan akumulasi total seluruh cabang Tunas Toyota Bekasi.
* **Mode Periode Fleksibel**:
  * **Bulanan**: Memilih bulan spesifik (Januari s/d Oktober 2026).
  * **YTM (Year-To-Month)**: Menghitung akumulasi kumulatif dari Januari sampai bulan yang dipilih (misal: YTM September = total Jan + Feb + ... + Sep).
  * **Kuartal (Q1, Q2, Q3, Q4)**: Mengelompokkan data berdasarkan periode kuartal:
    * **Q1**: Januari – Maret
    * **Q2**: April – Juni
    * **Q3**: Juli – September
    * **Q4**: Oktober – Desember (berjalan)

---

### 2. Peningkatan di Setiap Bulan (*MoM Growth Tracker*)
* **Kartu Indikator MoM**: Menampilkan persentase kenaikan/penurunan dibanding bulan sebelumnya lengkap dengan simbol panah naik hijau ($\blacktriangle$) atau turun merah ($\blacktriangledown$).
* **Grafik Garis MoM Growth Rate %**: Memetakan dinamika lonjakan unit antar bulan.
* **Grafik Target vs Realisasi RS AFI**: Grafik batang merah (aktual) berdampingan dengan garis putus-putus kuning (target unit) beserta informasi pencapaian (*% Achievement*).
* **Highlight Analisis**: Otomatis mendeteksi bulan puncak lonjakan penjualan (*Peak Month*) dan rata-rata *Achievement*.

---

### 3. RS AFI Berdasarkan Tipe Kendaraan & Jumlahnya
* **Peringkat Volume Kendaraan (Horizontal Bar Chart)**:
  * **Calya**: 340 unit (Kontributor unit terbesar)
  * **All New Avanza**: 131 unit
  * **Innova Zenix Hybrid**: 86 unit (Lini hybrid terlaris)
  * **Innova Reborn**: 66 unit
  * **Rush**: 60 unit
  * **Veloz Hybrid**: 49 unit
  * **Agya**: 41 unit
  * **Fortuner**: 32 unit
  * **Raize**: 29 unit
  * **Hilux D-Cab, Rangga, HiAce, Alphard, LC300, FT86, bZ4X**, dll.
* **Proporsi Pangsa Model (Donut Chart)**: Menampilkan persentase kontribusi masing-masing model terhadap total unit terjual.
* **Matriks Distribusi Tipe Kendaraan per Bulan**: Tabel komprehensif yang menampilkan jumlah unit tiap tipe kendaraan dari Januari hingga Oktober serta kolom akumulasi **Grand Total**. Dilengkapi dengan kotak pencarian (*Search Bar*) untuk memfilter tipe mobil tertentu.
* **Salesman Leaderboard**: Peringkat 8 tenaga penjual terbaik di bawah SPV terpilih (seperti Rhisna Eka Kurniawaty, Dicky Muliana, Anggraini, Dasuki Adnan, Denny Wahyu, dll).

---

### 4. Menu-Menu Spesifik Lainnya

1. **Cash vs Kredit & Pangsa Leasing**:
   - Rasio pembiayaan tunai (*Cash*) vs kredit (*Credit*).
   - Pangsa perusahaan pembiayaan: **TVC / TAF**, **MTF (Mandiri Tunas Finance)**, dan **Others**.
2. **Trade-In (Tukar Tambah)**:
   - Funnel 4 tahap konversi: *Replacement Prospek* $\rightarrow$ *Appraisal Selesai* $\rightarrow$ *Deal* $\rightarrow$ *Delivery Order (DO)*.
   - Diagram lingkaran sebaran merek mobil lama pelanggan.
   - Status deal dan saluran serapan (*Rekanan Showroom vs OLXmobbi*).
3. **AR & Piutang Leasing**:
   - Total nilai invoice penagihan leasing.
   - Total pencairan dana kas (*Receipt Amount*).
   - Saldo tertunggak (*Outstanding Balance Overdue*) dan grafik tren piutang bulanan.
4. **Kinerja Finansial**:
   - Monitoring *Revenue* aktual vs target.
   - Monitoring *Gross Profit (GP)* aktual vs target serta rasio GP.
   - Tracking *Operating Expenses (Opex)* dan *Profit Before Tax (PBT)*.
5. **Market Share & Polreg 2026 (Data GID 1815908456)**:
   - **Tampilan Peta Ganda (*Dual-View*)**:
     - 🗺️ **Google Maps Live (Semua Wilayah)**: Menampilkan 12 Polygon Kecamatan Kota Bekasi dengan tingkatan Paragon + pin interaktif untuk seluruh 119 kecamatan se-Jabodetabek (Kab. Bekasi, Jakarta, Tangerang, Depok).
     - 🎨 **Peta Infografis 12 Kecamatan (Sesuai Gambar No. 1)**: Visualisasi infografis warna-warni 12 kecamatan Kota Bekasi dengan pin badge angka penjualan aktual yang interaktif.
   - **Sistem Paragon & Biru Neon EV/HEV**:
     - Mode Normal: Paragon 4 Tier (Tier 1 Emerald `#10B981`, Tier 2 Cyan `#06B6D4`, Tier 3 Amber `#F59E0B`, Tier 4 Rose `#F43F5E`).
     - Sub-Menu EV & HEV: Mengunci Kolom E (`EV Vehicle`) & Kolom F (`HEV Vehicle`), polygon dan pin berubah otomatis menjadi warna **Biru Neon Elektrik**.
   - **Modal Rincian per Kecamatan**:
     - Klik pada polygon atau pin mana pun (baik Kota Bekasi maupun kecamatan luar) untuk menampilkan rincian merk mobil, tipe group terlaris, persentase pangsa, dan porsi BEV/HEV.
   - **Peringkat 10 Besar Merk & Market Share**:
     - Tabel 10 besar penjualan mobil dari tertinggi ke terendah, persentase pangsa pasar (*Market Share*), progress bar, dan kotak rumus transparansi perhitungan.

---

## 📁 Struktur Berkas

```
dashboard_satrio_2026/
├── Buka_Dashboard.bat        # Skrip 1-klik untuk langsung membuka dashboard di browser
├── index.html                # Aplikasi web dashboard utama (Tailwind + Leaflet Google Maps)
├── dataset.js                # Preloaded dataset (119 kecamatan Polreg, RS AFI, KPI, Trade-In, AR)
├── dashboard_standalone.html # Versi mandiri 1-file tanpa dependensi eksternal (siap offline)
├── img/
│   └── peta_bekasi_infografis.png # Peta visual infografis 12 Kecamatan Kota Bekasi (Gambar No. 1)
├── Code_Dashboard_Sync.gs    # Google Apps Script untuk integrasi Web App jika diperlukan
├── serve.py                  # Server lokal Python opsional (http://localhost:8088)
└── README_DASHBOARD.md       # Dokumentasi teknis & panduan lengkap
```

Dashboard siap digunakan dan dapat langsung dibuka dengan mengklik ganda file **`Buka_Dashboard.bat`** atau membuka file **`index.html`** di browser Anda!
