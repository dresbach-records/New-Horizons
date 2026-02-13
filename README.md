🌍 PROJETO NOVOS HORIZONTE
Plataforma de Inclusão Digital e Formação Tecnológica na África
📌 Visão Geral

O Projeto Novos Horizonte é uma plataforma educacional e institucional composta por:

🌐 Site institucional (Astro)

🎓 Dashboard do Aluno (Angular)

👨‍🏫 Dashboard do Mentor (Angular)

🛡 Dashboard Administrativo (Angular)

🚀 Backend robusto (NestJS + Prisma + PostgreSQL)

🔐 Autenticação JWT

📊 Sistema de métricas e ESG

Arquitetura modular, escalável e preparada para crescimento continental.

🏗 Arquitetura Geral
novos-horizonte-platform/
│
├── frontend-site/     → Site institucional (Astro)
├── frontend-app/      → Dashboards (Angular)
├── backend/           → API (NestJS)
│
├── docker-compose.yml
└── README.md

🌐 FRONTEND 1 – SITE INSTITUCIONAL (ASTRO)

Responsável por:

Captação de investidores

ESG & Transparência

Landing Pages

SEO

Conteúdo institucional

📁 Estrutura
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

🎓 FRONTEND 2 – DASHBOARD (ANGULAR)

Contém três áreas:

Aluno

Mentor

Admin

📁 Estrutura Angular
frontend-app/
│
└── src/app/
    │
    ├── core/
    │   ├── guards/
    │   ├── interceptors/
    │   └── services/
    │
    ├── shared/
    │   ├── components/
    │   │   ├── sidebar-student/
    │   │   ├── sidebar-mentor/
    │   │   ├── sidebar-admin/
    │   │   └── header/
    │   │
    │   └── layouts/
    │       ├── student-layout/
    │       ├── mentor-layout/
    │       └── admin-layout/
    │
    ├── modules/
    │   │
    │   ├── student/
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
    │   ├── mentor/
    │   │   ├── dashboard/
    │   │   ├── turmas/
    │   │   ├── alunos/
    │   │   ├── projetos/
    │   │   ├── agenda/
    │   │   ├── relatorios/
    │   │   ├── comunidade/
    │   │   └── recursos/
    │   │
    │   └── admin/
    │       ├── dashboard/
    │       ├── usuarios/
    │       ├── aprovacoes/
    │       ├── hubs/
    │       ├── bolsas/
    │       ├── financeiro/
    │       ├── relatorios/
    │       ├── esg/
    │       ├── metricas/
    │       └── configuracoes/
    │
    └── app-routing.module.ts

🚀 BACKEND – NESTJS + PRISMA + POSTGRESQL
📁 Estrutura
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

🔐 Autenticação

JWT

Guards por Role

Interceptors

Refresh Token Strategy

Roles:

STUDENT
MENTOR
ADMIN
SUPER_ADMIN

🎨 INSTALAÇÃO CORRETA DO TAILWIND (SEM CDN)

⚠️ NÃO utilizar:

https://cdn.tailwindcss.com


CDN gera estilo dinâmico em runtime e pode causar perda de estilo em produção.

🔹 ASTRO
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


tailwind.config.js:

export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
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


global.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🔹 ANGULAR
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


tailwind.config.js:

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: []
}


styles.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🧠 Boas Práticas

✔ Nunca usar CDN em produção
✔ Separar site público do app
✔ Manter docs internas
✔ Versionar arquitetura
✔ Isolar backend

🐳 Docker (Opcional)
docker-compose up -d


Serviços:

PostgreSQL

Backend

Frontend

📊 Futuro da Plataforma

IA para análise de performance

Ranking continental

Micro-certificações

Integração com empresas globais

ESG automático com dashboard público

📌 Status do Projeto

✔ Arquitetura definida
✔ Estrutura modular
✔ Separação frontend/backend
✔ Base escalável# New-Horizons
