# Spa Booking System - Monorepo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Remaster ชิ้นงานวิจัย ป.ตรี มทร. ศรีวิชัย คณะวิทยาศาสตร์และเทคโนโลยี

## 🎯 เกี่ยวกับโปรเจกต์ (About The Project)

ระบบจองบริการสปาออนไลน์ที่ถูกพัฒนาขึ้นภายใต้โครงสร้าง Monorepo โดยใช้ **Nuxt 3** สำหรับส่วน Frontend, **Nest.js** สำหรับส่วน Backend, และจัดการ Monorepo ด้วย **PNPM Workspace** โปรเจกต์นี้ถูกออกแบบมาเพื่อการใช้งานแบบ Self-Host ผ่าน **Docker Compose** เพื่อความสะดวกในการติดตั้งและบริหารจัดการ

ระบบนี้มีจุดมุ่งหมายเพื่อช่วยให้ร้านสปาและคลินิกบริการสามารถจัดการการจองของลูกค้าได้อย่างมีประสิทธิภาพ ลูกค้าสามารถเลือกบริการ, วันที่, และเวลาที่ต้องการได้อย่างง่ายดาย

## ✨ คุณสมบัติหลัก (Key Features)

*   **ระบบผู้ใช้งาน:** การลงทะเบียน, เข้าสู่ระบบ, การจัดการโปรไฟล์ และบทบาท (ลูกค้า, พนักงาน, ผู้ดูแลระบบ).
*   **จัดการบริการ:** เพิ่ม, แก้ไข, ลบ และแสดงรายการบริการสปา.
*   **จัดการพนักงาน:** (Optional) เพิ่ม, แก้ไข, ลบข้อมูลพนักงาน และกำหนดตารางเวลา.
*   **ระบบการจอง:** ลูกค้าสามารถจองบริการ, ดูประวัติการจอง, และยกเลิกการจองได้. ผู้ดูแลระบบสามารถจัดการการจองทั้งหมด.
*   **จัดการตารางเวลา:** ระบบจัดการช่วงเวลาเปิด-ปิด และความพร้อมใช้งานของบริการ/พนักงาน.
*   **API ที่มีประสิทธิภาพ:** พัฒนาด้วย Nest.js ซึ่งเป็น Node.js framework ที่ทันสมัยและรองรับ TypeScript เต็มรูปแบบ.
*   **Responsive UI:** Frontend พัฒนาด้วย Nuxt 3 (Vue 3) เพื่อประสบการณ์ใช้งานที่ลื่นไหลบนทุกอุปกรณ์.
*   **Self-Hostable:** สามารถติดตั้งและรันระบบทั้งหมดบนเซิร์ฟเวอร์ของคุณเองโดยใช้ Docker Compose.

## 🚀 เทคโนโลยีที่ใช้ (Technologies Used)

*   **Frontend:** [Nuxt 3](https://nuxt.com/) (Vue 3, Pinia, TailwindCSS 4, NuxtUI 3)
*   **Backend:** [Nest.js](https://nestjs.com/) (TypeScript)
*   **Monorepo Tool:** [PNPM Workspace](https://pnpm.io/workspaces)
*   **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
spa-booking-monorepo/
├── apps/
│   ├── backend/        # Nest.js application for API
│   └── frontend/       # Nuxt 3 application for User Interface
├── packages/
│   └── shared/         # Shared interfaces, DTOs, enums, etc.
├── .env.example        # Example environment variables
├── docker-compose.yml  # Docker Compose configuration for local development/self-host
├── pnpm-workspace.yaml # PNPM Workspace configuration
└── package.json        # Root package.json
```

## 🛠️ การตั้งค่าและติดตั้ง (Setup and Installation)

### ข้อกำหนดเบื้องต้น (Prerequisites)

*   [Git](https://git-scm.com/downloads)
*   [Node.js](https://nodejs.org/en/download/) (v18 หรือสูงกว่า แนะนำเวอร์ชั่น LTS)
*   [PNPM](https://pnpm.io/installation) (`npm install -g pnpm` หรือ `corepack enable pnpm`)
*   [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)

## 📜 License

โปรเจกต์นี้ได้รับอนุญาตภายใต้ [MIT License](LICENSE).

---