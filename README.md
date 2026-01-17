# 🌿 NUR Aesthetic — Rosario, ARG

![Vercel Deployment](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-15-blue?style=for-the-badge&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

> **Live Demo:** [nurestetica.com.ar](https://nurestetica.com.ar)

**NUR Aesthetic** is a high-performance web application designed for a premium beauty center in Rosario, Argentina. 

This project was built with a strong focus on **Local SEO**, **Core Web Vitals**, and a **Data-Driven Architecture** to ensure scalability and ease of maintenance.

---

## 📸 Project Gallery

### 🎨 User Interface & Experience
<details>
  <summary><strong>👁️ Ver Diseño Completo (Click para expandir)</strong></summary>
  <br>
  <div align="center">
    <img src="./screenshots/home-full-preview.png" alt="Desktop Full Preview" width="100%" style="border-radius: 8px;">
  </div>
</details>

<br>

| **📱 Mobile Responsiveness** | **✨ Dynamic Service Pages** |
| :---: | :---: |
| <img src="./screenshots/mobile-menu.png" alt="Mobile Menu" width="300"/> | <img src="./screenshots/service-detail.png" alt="Service Detail Page" width="300"/> |
| *Smooth transitions & backdrop blur* | *Auto-generated pages based on data* |

---

### ⚡ Performance Metrics (Core Web Vitals)
Achieving a **near-perfect 99/100 score** on Google Lighthouse was a core requirement for this project to ensure top-tier SEO ranking and instant loading times in Rosario.

| **Desktop Performance (99)** | **Mobile Performance (99)** |
| :---: | :---: |
| <img src="./screenshots/lighthouse-score-desktop.png" alt="Lighthouse Desktop Score" width="100%"/> | <img src="./screenshots/lighthouse-score-mobile.png" alt="Lighthouse Mobile Score" width="100%"/> |

---

## 🚀 Key Features

### 🔍 Advanced SEO & Discovery
-   **Dynamic Metadata:** Automatically generates unique `title` and `description` tags for every service page based on the data layer.
-   **Automated Sitemap:** A server-side `sitemap.ts` that updates in real-time.
-   **JSON-LD Schema:** Integration of `LocalBusiness` structured data to boost visibility in Google Maps and search results.
-   **Analytics:** Integrated **Google Analytics 4** and **Google Search Console** for conversion tracking.

### 🎨 UI/UX Design System
-   **Premium Aesthetic:** Features a custom color palette (`Rose-400`/`Neutral-900`) and typography (`Playfair Display` & `Montserrat`) to reflect the brand's identity.
-   **Responsive & Interactive:** Fully responsive layouts with smooth micro-interactions built with Tailwind CSS.
-   **Performance First:** Optimized images using `next/image` with priority loading strategies.

---

## 🏗️ Data Architecture & Scalability

The project follows a **Data-Driven** approach:

-   **Centralized Data Source:** All clinical treatments and services are managed through a centralized typed constant (`TREATMENTS_DATA`).Updating a price or description reflects instantly across the app.
-   **Dynamic Routing:** Leveraging Next.js App Router (`/services/[slug]`), the application generates unique pages for each treatment on-demand.
-   **Type Safety:** Strict TypeScript implementation for service definitions ensures compile-time error catching.

---

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Analytics:** [Google Analytics 4](https://analytics.google.com/)
-   **Deployment:** [Vercel](https://vercel.com/) (Edge Network)

---

## 📦 Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/nur-aesthetic-studio.git](https://github.com/your-username/nur-aesthetic-studio.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```bash
├── app/                # Next.js App Router (Pages & API)
│   ├── services/       # Dynamic Service Routes ([slug])
│   ├── sitemap.ts      # Dynamic XML Sitemap generation
│   └── robots.ts       # SEO crawling rules
├── src/
│   ├── components/     # Reusable UI components (Navbar, Button, etc.)
│   └── data/           # Centralized Data Layer (treatments.ts)
├── public/             # Static assets (images, fonts)
└── tailwind.config.ts  # Design System configuration
```

---

## 👤 Author

**malcom**
*Software Engineer | Full Stack (.NET & Next.js)*
<br>
*University Technician in Programming (UTN Rosario)*
