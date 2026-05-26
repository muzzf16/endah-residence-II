# **Product Requirements Document (PRD)**

# **Website SEO-First — Endah Residence II**

## **Status**

MVP Planning v2.1 (Disempurnakan dengan Trust Signals & Silo Architecture)

## **Project Name**

Endah Residence II

## **Project Type**

Local SEO-Driven Property Website

## **Primary Goal**

Organic Lead Generation via Google Search & WhatsApp Conversion

# **1\. Executive Summary**

Website Endah Residence II dibangun sebagai mesin akuisisi leads organik berbasis Local SEO untuk proyek perumahan di Bandar, Batang.

Berbeda dari website perumahan biasa yang hanya berfungsi sebagai brosur digital, website ini dirancang dengan pendekatan:

* SEO-first  
* Mobile-first  
* Conversion-first  
* Performance-first  
* **Trust-first (Transparansi Legalitas & Progres)**

Fokus utama:

1. Ranking keyword lokal properti  
2. Mendatangkan traffic organik berkualitas  
3. Mengubah pengunjung menjadi leads WhatsApp terukur  
4. Menjadi aset digital jangka panjang

Website akan dibangun menggunakan arsitektur modern Jamstack untuk memastikan:

* loading cepat  
* struktur SEO optimal  
* keamanan lebih baik  
* biaya hosting rendah  
* scalability jangka panjang

# **2\. Business Goals**

## **Primary Goals**

### **1\. Dominasi Keyword Lokal**

Target ranking Google:

* perumahan bandar batang  
* rumah subsidi batang  
* rumah murah bandar batang  
* rumah dekat kawasan industri batang  
* endah residence ii

### **2\. Lead Generation**

Mengubah minimal:

* 3–5% organic visitor menjadi:  
* WhatsApp inquiry  
* survey lokasi  
* lead database

### **3\. Local Brand Awareness**

Menjadikan Endah Residence II sebagai salah satu keyword properti lokal yang dikenal di area:

* Bandar  
* Batang  
* Tulis  
* Limpung  
* kawasan industri sekitar

### **4\. Benchmark Kompetitor**

Menang atas ranking portal agregator (Rumah123, 99.co) pada keyword spesifik long-tail lokal (misal: "perumahan subsidi bebas banjir di bandar").

# **3\. Target Audience**

## **Primary Audience**

### **1\. Karyawan Kawasan Industri**

Karakteristik:

* usia 23–40 tahun  
* mencari rumah pertama  
* sensitif terhadap harga & cicilan

### **2\. Pasangan Muda**

Karakteristik:

* baru menikah  
* mencari rumah subsidi  
* membutuhkan akses strategis

### **3\. Investor Properti Lokal**

Karakteristik:

* mencari properti berkembang  
* tertarik area industri Batang

### **4\. Pencari Rumah Subsidi**

Karakteristik:

* mencari DP ringan  
* fokus cicilan bulanan  
* membutuhkan bantuan proses KPR

# **4\. Search Intent Strategy**

## **Informational Intent**

Contoh:

* cara KPR rumah subsidi  
* syarat rumah subsidi  
* simulasi cicilan rumah

Tujuan: Mendatangkan traffic blog.

## **Commercial Intent**

Contoh:

* harga rumah batang  
* perumahan bandar batang  
* rumah murah batang

Tujuan: Mendatangkan calon pembeli aktif.

## **Transactional Intent**

Contoh:

* booking rumah batang  
* survey rumah batang  
* hubungi marketing rumah batang

Tujuan: Konversi WhatsApp.

# **5\. Success Metrics (KPI)**

## **SEO Metrics**

* Indexed pages Google  
* Keyword ranking  
* Organic traffic growth  
* CTR Google Search

## **Conversion Metrics**

* WhatsApp clicks  
* Form submissions  
* Survey requests  
* Conversion rate

## **Technical Metrics**

* PageSpeed Insights \> 90 mobile  
* LCP \< 2.5s  
* CLS \< 0.1  
* INP \< 200ms

# **6\. Recommended Tech Stack**

## **Frontend Framework**

### **Astro**

Alasan:

* sangat cepat  
* SEO-friendly  
* minim JavaScript (Zero JS default)  
* cocok static site  
* memiliki komponen \<Image /\> bawaan untuk optimasi .webp otomatis

## **Styling**

### **Tailwind CSS**

Alasan:

* responsive cepat  
* CSS ringan  
* maintainable

## **Deployment**

### **Vercel atau Netlify**

Alasan:

* deployment mudah  
* CDN global  
* SSL otomatis  
* integrasi GitHub

## **Content Strategy**

### **Phase 1**

Markdown-based content (MDX di Astro).

### **Phase 2**

Integrasi Headless CMS:

* Sanity  
* Strapi

## **Analytics**

* Google Analytics 4  
* Google Search Console  
* Meta Pixel

# **7\. Information Architecture (Sitemap)**

*Pembaruan: Struktur URL diubah menjadi konsep "Silo" agar lebih logis bagi Google Crawler.*

## **Core Pages**

/ (Beranda)  
/tentang-kami  
/kontak  
/galeri-progres (Penting untuk Trust factor)

## **Unit / Produk (Silo Architecture)**

/unit  
/unit/tipe-30-subsidi  
/unit/tipe-36-komersil

## **SEO Landing Pages (Area Based)**

/lokasi/perumahan-bandar-batang  
/lokasi/rumah-subsidi-batang  
/lokasi/rumah-dekat-industri-batang

## **Blog Categories**

/blog  
/blog/kpr/\[slug\]  
/blog/properti/\[slug\]  
/blog/investasi/\[slug\]

# **8\. Homepage Requirements**

## **Hero Section**

Komponen:

* headline H1 ("Hunian Terbaik di Bandar Batang")  
* subheadline  
* CTA WhatsApp  
* CTA Survey Lokasi  
* hero image optimized

## **USP & Trust Signals (Sinyal Kepercayaan)**

Menampilkan:

* dekat kawasan industri  
* bebas banjir  
* **Status Legalitas (SHM, PBG/IMB Aman)** \-\> *Krusial untuk mengalahkan penipuan developer bodong*  
* **Sertifikasi / Asosiasi (jika ada, misal REI/Himperra)**

## **Unit Preview**

Menampilkan:

* tipe rumah  
* harga mulai  
* spesifikasi singkat  
* tombol detail

## **Update Progres Pembangunan (Social Proof)**

* Menampilkan 3-4 foto terbaru kondisi proyek (jalan cor, tiang pancang, serah terima kunci) agar visitor tahu proyek ini aktif dan nyata.

## **Location Section**

Menampilkan:

* embed Google Maps (Jl. Sendang-Tulis, Batiombo)  
* akses lokasi  
* fasilitas sekitar  
* jarak ke lokasi penting

## **Global Footer (Wajib SEO Lokal)**

Footer harus sama di SEMUA halaman, berisi:

* **NAP (Name, Address, Phone)**: Endah Residence II, Jl. Sendang-Tulis Batiombo, Bandar, Batang. Telp: 082134994060\.  
* Link ke Google Maps Profile.  
* Link ke semua halaman penting dan Kategori Blog.

# **9\. Detail Unit Page Requirements**

## **Komponen Wajib**

* gallery optimized (Gunakan alt-text kaya kata kunci)  
* spesifikasi teknis rumah (Bata, pondasi, atap)  
* siteplan (Sisa unit)  
* simulasi KPR (Tabel cicilan sederhana)  
* CTA WhatsApp  
* CTA survey

## **SEO Requirements**

* unique title  
* unique meta description  
* image alt text  
* structured heading (H1, H2, H3)  
* internal linking ke blog KPR

# **10\. Blog Requirements**

## **Tujuan Blog**

* mendatangkan traffic organik  
* edukasi calon pembeli  
* meningkatkan authority SEO

## **Content Pillars**

### **1\. KPR**

Contoh:

* syarat KPR subsidi  
* simulasi KPR

### **2\. Properti Lokal**

Contoh:

* tren harga rumah di Batang  
* tips beli rumah pertama

### **3\. Lokal Area (Local Pride)**

Contoh:

* perkembangan kawasan industri Batang  
* fasilitas pendidikan dan kesehatan di Bandar

## **Publishing Target**

* minimal 2 artikel/minggu  
* minimal 8 artikel/bulan

# **11\. Local SEO Requirements**

## **Google Business Profile**

Wajib integrasi:

* Google Maps  
* review pelanggan  
* NAP consistency  
* location keyword

## **NAP Consistency**

Data berikut harus konsisten di *Footer Website, Google Maps, dan Instagram*:

* Nama Bisnis: Endah Residence II  
* Alamat Lengkap: Jl. Sendang-Tulis, Batiombo, Bandar, Batang  
* Nomor Telepon: 082134994060 / 087880211288

# **12\. Technical SEO Requirements**

## **Meta Tags**

Semua halaman wajib memiliki:

* title  
* meta description  
* canonical URL  
* Open Graph tags (og:image, og:title) untuk share di Facebook/WA

## **Schema Markup (JSON-LD)**

Wajib diintegrasikan:

* LocalBusiness / RealEstateAgent di Homepage  
* FAQPage di halaman spesifik FAQ  
* BreadcrumbList di semua halaman  
* Article di halaman blog

## **URL Structure**

Contoh:

GOOD: /blog/syarat-kpr-subsidi-batang

BAD: /post?id=123

## **Image Optimization**

Semua gambar wajib:

* Menggunakan tag \<Image /\> bawaan Astro untuk konversi otomatis ke WebP/AVIF  
* responsive image (srcset)  
* lazy loading (bawaan Astro)  
* descriptive filename (contoh: gerbang-endah-residence-bandar-batang.jpg)

# **13\. Conversion Requirements**

## **Floating WhatsApp Button**

Fitur:

* mobile optimized  
* selalu terlihat  
* tidak mengganggu UX (tidak menutupi teks penting)

## **WhatsApp Pre-filled Message (Dengan Tracking)**

Contoh:

"Halo Tim Endah Residence II, saya melihat informasi dari **Website**. Saya tertarik dengan perumahan Anda dan ingin menanyakan tentang unit Tipe \[30/36\]. Mohon informasinya."

*(Sangat penting untuk menambahkan kata "dari Website" agar tim sales tahu konversi ini hasil dari optimasi SEO Anda, bukan dari brosur fisik).*

# **14\. Analytics & Tracking**

## **Tools**

* Google Analytics 4  
* Google Search Console (Wajib daftarkan sitemap ke sini saat live)  
* Meta Pixel

## **Event Tracking**

Track:

* klik tombol WhatsApp  
* klik CTA Survey Lokasi

# **15\. Performance Requirements**

## **Target Core Web Vitals**

| Metric | Target |
| :---- | :---- |
| PSI Mobile | \>90 |
| LCP | \<2.5s |
| CLS | \<0.1 |
| INP | \<200ms |

## **Optimization Rules**

Hindari:

* autoplay video besar  
* slider carousel jQuery (gunakan pure CSS/Tailwind jika terpaksa pakai slider)  
* JS berlebihan untuk hal-hal dekoratif

# **16\. Security Requirements**

## **Security Minimum**

* HTTPS wajib  
* form spam protection (honeypot atau cloudflare turnstile jika ada form)

# **17\. Acceptance Criteria**

## **SEO Validation**

* Meta tags valid  
* Schema JSON-LD muncul saat dicek di Google Rich Results Test  
* Sitemap.xml dapat diakses  
* Robots.txt valid

## **Performance Validation**

* PSI mobile \>90  
* Semua gambar diproses sebagai WebP

## **Responsive Validation**

* Tidak ada scroll horizontal di HP (overflow-x hidden aman)  
* Tap target tombol WA cukup besar di layar kecil

# **18\. MVP Development Roadmap**

## **Phase 1 — MVP (Fokus Bulan Ini)**

Fokus Pengembangan:

* Homepage lengkap (Hero, Progres, Peta, Unit)  
* Halaman Detail Unit (Tipe 30 & 36\)  
* Global Footer & Header  
* WhatsApp CTA terintegrasi  
* Astro Setup \+ Tailwind  
* Deploy ke Vercel

## **Phase 2 (Bulan 2-3)**

Tambah:

* Blog system (Markdown/MDX Astro)  
* Halaman "Tentang Kami" & "Fasilitas Lokal"  
* Halaman Landing SEO Area (misal: /lokasi/rumah-murah-batang)  
* Integrasi Google Analytics & Search Console

## **Phase 3**

Tambah:

* Headless CMS (Sanity) agar admin bisa tambah blog tanpa coding.  
* Advanced Automation.

# **19\. Notes for Beginner Developer**

## **Mantra Pengembangan Proyek Pertama:**

1. **"Selesai lebih baik daripada sempurna."** Jangan tersendat pada desain animasi yang rumit. Desain minimalis yang memuat cepat jauh lebih dihargai oleh Google dan pembeli rumah.  
2. Gunakan Layout utama di Astro (Layout.astro) untuk menaruh komponen Footer, Header, dan Meta SEO agar tidak mengulang penulisan kode di setiap halaman.  
3. Selalu periksa website di HP Anda sendiri sebelum mempublikasikan pembaruan.

## **Recommended MVP Stack**

Astro \+ Tailwind \+ Markdown (MDX) \+ Vercel \+ Google Analytics