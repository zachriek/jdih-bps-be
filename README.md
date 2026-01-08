# JDIH BPS Backend API Documentation

API Backend untuk sistem Jaringan Dokumentasi dan Informasi Hukum (JDIH) BPS.

## Base URL
```
http://localhost:5001/api
```

## Authentication
Beberapa endpoint memerlukan autentikasi. Gunakan JWT token di header:
```
Authorization: Bearer <token>
```

---

## Table of Contents
1. [Health Check](#health-check)
2. [Authentication](#authentication-endpoints)
3. [Regulations](#regulations-endpoints)
4. [News](#news-endpoints)
5. [Overview](#overview-endpoints)

---

## Health Check

### Check API Health
**GET** `/health`

Mengecek status API.

**Response:**
```json
{
  "ok": true,
  "ts": "2026-01-08T12:00:00.000Z"
}
```

---

## Authentication Endpoints

### Login
**POST** `/auth/login`

Login user dan mendapatkan JWT token.

**Rate Limit:** 5 requests per 15 menit per IP

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Validation:**
- `email`: String, format email valid (required)
- `password`: String, minimal 6 karakter (required)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "username": "johndoe",
      "email": "user@example.com",
      "picture": "https://example.com/picture.jpg",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-08T00:00:00.000Z"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Email atau password salah",
  "data": {
    "token": null,
    "user": null
  }
}
```

---

### Get Current User
**GET** `/auth/me`

Mendapatkan data user yang sedang login.

**Authentication:** Required

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "username": "johndoe",
      "email": "user@example.com",
      "picture": "https://example.com/picture.jpg",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-08T00:00:00.000Z"
    }
  }
}
```

---

## Regulations Endpoints

### Get All Regulations
**GET** `/regulations`

Mendapatkan semua data regulasi.

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "regulations": [
      {
        "id": "507f1f77bcf86cd799439011",
        "documentType": "PERATURAN",
        "legalType": "Peraturan Menteri",
        "title": "Peraturan tentang Statistik",
        "abbreviation": "Permen Stat 2024",
        "regulationNumber": "001/2024",
        "yearPublished": 2024,
        "status": "Aktif",
        "description": "Peraturan mengenai statistik nasional",
        "placeIssued": "Jakarta",
        "dateIssued": "2024-01-15T00:00:00.000Z",
        "promulgationDate": "2024-01-20T00:00:00.000Z",
        "language": "Indonesia",
        "location": "Jakarta",
        "lawField": "Statistik",
        "governmentAffair": "Statistik Nasional",
        "signer": "Menteri Statistik",
        "accessCount": 150,
        "abstractFileName": "abstract_001_2024.pdf",
        "abstractFileUrl": "/files/abstract/abstract_001_2024.pdf",
        "regulationFileName": "permen_001_2024.pdf",
        "regulationFileUrl": "/files/regulations/permen_001_2024.pdf",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-08T00:00:00.000Z"
      }
    ]
  }
}
```

---

### Get Regulation by ID
**GET** `/regulations/:id`

Mendapatkan detail regulasi berdasarkan ID.

**URL Parameters:**
- `id`: MongoDB ObjectId (24 karakter hex)

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "regulation": {
      "id": "507f1f77bcf86cd799439011",
      "documentType": "PERATURAN",
      "legalType": "Peraturan Menteri",
      "title": "Peraturan tentang Statistik",
      // ... semua field regulation
    }
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Regulasi tidak ditemukan"
}
```

---

### Increment Access Count
**PATCH** `/regulations/:id/access`

Menambah jumlah akses regulasi (untuk tracking).

**URL Parameters:**
- `id`: MongoDB ObjectId

**Success Response (200):**
```json
{
  "success": true,
  "message": "Access count berhasil ditambah",
  "data": {
    "regulation": {
      "id": "507f1f77bcf86cd799439011",
      "accessCount": 151,
      // ... field lainnya
    }
  }
}
```

---

### Create Regulation
**POST** `/regulations`

Membuat regulasi baru.

**Authentication:** Required

**Request Body:**
```json
{
  "documentType": "PERATURAN",
  "legalType": "Peraturan Menteri",
  "title": "Peraturan tentang Statistik",
  "abbreviation": "Permen Stat 2024",
  "regulationNumber": "001/2024",
  "yearPublished": 2024,
  "status": "Aktif",
  "description": "Peraturan mengenai statistik nasional",
  "placeIssued": "Jakarta",
  "dateIssued": "2024-01-15",
  "promulgationDate": "2024-01-20",
  "language": "Indonesia",
  "location": "Jakarta",
  "lawField": "Statistik",
  "governmentAffair": "Statistik Nasional",
  "signer": "Menteri Statistik",
  "abstractFileName": "abstract_001_2024.pdf",
  "abstractFileUrl": "/files/abstract/abstract_001_2024.pdf",
  "regulationFileName": "permen_001_2024.pdf",
  "regulationFileUrl": "/files/regulations/permen_001_2024.pdf"
}
```

**Field Validation:**
- `documentType`: Enum ["PERATURAN", "MONOGRAFI", "ARTIKEL", "PUTUSAN"] (optional)
- `legalType`: String (optional)
- `title`: String (optional)
- `abbreviation`: String (optional)
- `regulationNumber`: String (optional)
- `yearPublished`: Integer (optional)
- `status`: String (optional)
- `description`: String (optional)
- `placeIssued`: String (optional)
- `dateIssued`: Date (optional)
- `promulgationDate`: Date (optional)
- `language`: String (optional)
- `location`: String (optional)
- `lawField`: String (optional)
- `governmentAffair`: String (optional)
- `signer`: String (optional)
- `abstractFileName`: String (optional)
- `abstractFileUrl`: String (optional)
- `regulationFileName`: String (optional)
- `regulationFileUrl`: String (optional)

**Success Response (201):**
```json
{
  "success": true,
  "message": "Berhasil menambahkan regulasi baru",
  "data": {
    "regulation": {
      "id": "507f1f77bcf86cd799439011",
      "documentType": "PERATURAN",
      // ... semua field
      "createdAt": "2026-01-08T00:00:00.000Z",
      "updatedAt": "2026-01-08T00:00:00.000Z"
    }
  }
}
```

---

### Update Regulation
**PUT** `/regulations/:id`

Mengupdate data regulasi.

**Authentication:** Required

**URL Parameters:**
- `id`: MongoDB ObjectId

**Request Body:** (sama seperti Create Regulation, semua field optional)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Data regulasi berhasil diperbarui",
  "data": {
    "regulation": {
      "id": "507f1f77bcf86cd799439011",
      // ... updated fields
    }
  }
}
```

---

### Delete Regulation
**DELETE** `/regulations/:id`

Menghapus regulasi.

**Authentication:** Required

**URL Parameters:**
- `id`: MongoDB ObjectId

**Success Response (200):**
```json
{
  "success": true,
  "message": "Data regulasi berhasil dihapus",
  "data": {
    "regulation": {
      "id": "507f1f77bcf86cd799439011",
      // ... deleted regulation data
    }
  }
}
```

---

## News Endpoints

### Get All News
**GET** `/news`

Mendapatkan semua data news.

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "news": [
      {
        "id": "507f1f77bcf86cd799439011",
        "title": "Workshop Statistik Nasional 2024",
        "content": "Akan diadakan workshop statistik nasional...",
        "authorId": "507f1f77bcf86cd799439012",
        "author": {
          "id": "507f1f77bcf86cd799439012",
          "name": "Admin JDIH",
          "email": "admin@bps.go.id",
          "picture": "https://example.com/avatar.jpg"
        },
        "source": "BPS",
        "category": "WORKSHOP",
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-08T00:00:00.000Z"
      }
    ]
  }
}
```

---

### Get News by ID
**GET** `/news/:id`

Mendapatkan detail news berdasarkan ID.

**URL Parameters:**
- `id`: MongoDB ObjectId

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "news": {
      "id": "507f1f77bcf86cd799439011",
      "title": "Workshop Statistik Nasional 2024",
      "content": "Akan diadakan workshop statistik nasional...",
      "authorId": "507f1f77bcf86cd799439012",
      "author": {
        "id": "507f1f77bcf86cd799439012",
        "name": "Admin JDIH",
        "email": "admin@bps.go.id",
        "picture": "https://example.com/avatar.jpg"
      },
      "source": "BPS",
      "category": "WORKSHOP",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-08T00:00:00.000Z"
    }
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "News tidak ditemukan"
}
```

---

### Get News by Author ID
**GET** `/news/author/:authorId`

Mendapatkan semua news dari author tertentu.

**URL Parameters:**
- `authorId`: MongoDB ObjectId

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "news": [
      {
        "id": "507f1f77bcf86cd799439011",
        "title": "Workshop Statistik Nasional 2024",
        // ... field lainnya
      }
    ]
  }
}
```

---

### Create News
**POST** `/news`

Membuat news baru.

**Authentication:** Required

**Request Body:**
```json
{
  "title": "Workshop Statistik Nasional 2024",
  "content": "Akan diadakan workshop statistik nasional pada tanggal...",
  "authorId": "507f1f77bcf86cd799439012",
  "source": "BPS",
  "category": "WORKSHOP"
}
```

**Field Validation:**
- `title`: String, minimal 1 karakter (required)
- `content`: String, minimal 1 karakter (required)
- `authorId`: MongoDB ObjectId 24 karakter hex (required)
- `source`: String (optional)
- `category`: Enum ["SOSIALISASI", "PENGUMUMAN", "WORKSHOP", "EVALUASI", "LAINNYA"] (optional)

**Success Response (201):**
```json
{
  "success": true,
  "message": "Berhasil menambahkan news baru",
  "data": {
    "news": {
      "id": "507f1f77bcf86cd799439011",
      "title": "Workshop Statistik Nasional 2024",
      "content": "Akan diadakan workshop statistik nasional...",
      "authorId": "507f1f77bcf86cd799439012",
      "author": {
        "id": "507f1f77bcf86cd799439012",
        "name": "Admin JDIH",
        "email": "admin@bps.go.id",
        "picture": "https://example.com/avatar.jpg"
      },
      "source": "BPS",
      "category": "WORKSHOP",
      "createdAt": "2026-01-08T00:00:00.000Z",
      "updatedAt": "2026-01-08T00:00:00.000Z"
    }
  }
}
```

---

### Update News
**PUT** `/news/:id`

Mengupdate data news.

**Authentication:** Required

**URL Parameters:**
- `id`: MongoDB ObjectId

**Request Body:** (sama seperti Create News)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Data news berhasil diperbarui",
  "data": {
    "news": {
      "id": "507f1f77bcf86cd799439011",
      // ... updated fields
    }
  }
}
```

---

### Delete News
**DELETE** `/news/:id`

Menghapus news.

**Authentication:** Required

**URL Parameters:**
- `id`: MongoDB ObjectId

**Success Response (200):**
```json
{
  "success": true,
  "message": "Data news berhasil dihapus",
  "data": {
    "news": {
      "id": "507f1f77bcf86cd799439011",
      // ... deleted news data
    }
  }
}
```

---

## Overview Endpoints

### Get Overview Statistics
**GET** `/overview`

Mendapatkan statistik overview sistem.

**Success Response (200):**
```json
{
  "success": true,
  "message": "success",
  "data": {
    "overview": {
      "totalRegulations": 150,
      "totalAccessCounts": 5420,
      "totalNews": 45,
      "totalMonografi": 30,
      "totalArtikel": 25,
      "totalPutusan": 20
    }
  }
}
```

**Field Description:**
- `totalRegulations`: Total semua regulasi
- `totalAccessCounts`: Total akses ke semua regulasi
- `totalNews`: Total news
- `totalMonografi`: Total regulasi dengan tipe MONOGRAFI
- `totalArtikel`: Total regulasi dengan tipe ARTIKEL
- `totalPutusan`: Total regulasi dengan tipe PUTUSAN

---

## Error Responses

### 400 Bad Request
Request tidak valid atau validasi gagal.
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Format email tidak valid"
    }
  ]
}
```

### 401 Unauthorized
Token tidak valid atau tidak ada.
```json
{
  "success": false,
  "message": "Unauthorized"
}
```

### 404 Not Found
Resource tidak ditemukan.
```json
{
  "success": false,
  "message": "Data tidak ditemukan"
}
```

### 429 Too Many Requests
Rate limit terlampaui.
```json
{
  "success": false,
  "message": "Terlalu banyak request, coba lagi nanti"
}
```

### 500 Internal Server Error
Kesalahan server.
```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Rate Limiting

API menggunakan rate limiting untuk mencegah abuse:
- **Global Rate Limit**: 100 requests per 15 menit per IP (untuk endpoint `/auth/*`)
- **Login Rate Limit**: 5 requests per 15 menit per IP (untuk `/auth/login`)

---

## Notes

1. Semua endpoint yang memerlukan authentication harus menyertakan JWT token di header Authorization
2. Semua response menggunakan format JSON
3. Tanggal menggunakan format ISO 8601
4. MongoDB ObjectId harus berupa string 24 karakter hexadecimal
5. Enum values bersifat case-sensitive