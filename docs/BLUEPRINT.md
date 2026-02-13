Blueprint completo do Projeto Novos Horizonte, incluindo:

📁 Mapa de pastas do Site (Astro)

📁 Mapa de pastas do Dashboard Aluno

📁 Mapa de pastas do Dashboard Mentor

📁 Mapa de pastas do Dashboard Admin

📁 Backend NestJS

📁 Estrutura raiz completa

⚙️ Instrução final para instalar Tailwind corretamente (evitar perda de estilo)

Tudo organizado de forma profissional.

🏗 1️⃣ FRONTEND – SITE INSTITUCIONAL (ASTRO)
frontend-site/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── CTA.astro
│   │   ├── CardImpact.astro
│   │   └── SEO.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sobre.astro
│   │   ├── missao.astro
│   │   ├── parcerias.astro
│   │   ├── transparencia.astro
│   │   ├── esg.astro
│   │   ├── legal.astro
│   │   ├── faq.astro
│   │   └── contato.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── config/
│       └── site.ts
│
└── docs/
    ├── BLUEPRINT.md
    ├── ROUTES.md
    ├── DESIGN_SYSTEM.md
    └── SEO.md

🎓 2️⃣ DASHBOARD ALUNO (ANGULAR)
frontend-app/
│
├── src/app/
│   ├── core/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── sidebar-student/
│   │   │   ├── header/
│   │   │   └── cards/
│   │   │
│   │   └── layouts/
│   │       └── student-layout/
│   │
│   ├── modules/
│   │   ├── dashboard/
│   │   ├── cursos/
│   │   ├── aulas/
│   │   ├── biblioteca/
│   │   ├── progresso/
│   │   ├── mentorias/
│   │   ├── certificados/
│   │   ├── ranking/
│   │   ├── financeiro/
│   │   ├── notificacoes/
│   │   ├── perfil/
│   │   └── configuracoes/
│   │
│   └── app-routing.module.ts

👨‍🏫 3️⃣ DASHBOARD MENTOR
frontend-app/src/app/modules/mentor/
│
├── dashboard/
├── turmas/
├── alunos/
├── projetos/
├── agenda/
├── relatorios/
├── comunidade/
└── recursos/

🛡 4️⃣ DASHBOARD ADMIN
frontend-app/src/app/modules/admin/
│
├── dashboard/
├── usuarios/
├── aprovacoes/
├── hubs/
├── bolsas/
├── financeiro/
├── relatorios/
├── esg/
├── metricas/
└── configuracoes/

🧠 5️⃣ BACKEND – NESTJS + PRISMA
backend/
│
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── students/
│   │   ├── mentors/
│   │   ├── admin/
│   │   ├── courses/
│   │   ├── classes/
│   │   ├── analytics/
│   │   └── notifications/
│   │
│   ├── common/
│   │   ├── guards/
│   │   ├── decorators/
│   │   └── filters/
│   │
│   ├── prisma/
│   │   ├── prisma.service.ts
│   │   └── schema.prisma
│   │
│   └── main.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env
└── package.json

🏁 6️⃣ ESTRUTURA RAIZ FINAL COMPLETA
novos-horizonte-platform/
│
├── frontend-site/      → Astro (Site público)
├── frontend-app/       → Angular (Dashboards)
├── backend/            → NestJS API
│
├── docker-compose.yml
├── README.md
└── docs-gerais/

⚙️ INSTALAÇÃO CORRETA DO TAILWIND (PARA NÃO PERDER ESTILO)

⚠️ NÃO usar CDN.

Remover:

<script src="https://cdn.tailwindcss.com"></script>

🔹 ASTRO

Dentro de frontend-site:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Editar tailwind.config.js:

export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f27f0d",
        "sidebar-dark": "#0f172a",
        "header-blue": "#1e293b"
      }
    }
  },
  plugins: []
}


Criar src/styles/global.css:

@tailwind base;
@tailwind components;
@tailwind utilities;


Importar no layout base:

---
import '../styles/global.css';
---

🔹 ANGULAR

Dentro de frontend-app:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


No tailwind.config.js:

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}


No styles.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🎯 RESULTADO

✔ Sem CDN
✔ Sem perda de estilo
✔ Build otimizado
✔ Produção profissional
✔ Escalável
