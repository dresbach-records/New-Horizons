
<p align="center">
  <img src="public/logosemfundo.png" width="200" />
</p>

# Projeto New-Horizons

Este repositório abriga o ecossistema de front-end do **Projeto New-Horizons**, uma iniciativa social focada no desenvolvimento e capacitação de jovens.

O projeto é composto por duas aplicações principais:
1.  **Site Institucional:** Um site de conteúdo estático, construído com Astro.js, para apresentar o projeto ao público.
2.  **Dashboard da Plataforma:** Uma Single Page Application (SPA) construída com Angular, servindo como a plataforma de interação para Alunos, Mentores e Administradores.

---

## 1. Frontend - Site Institucional (Astro.js)

O site institucional é a vitrine do projeto, projetado para ser extremamente rápido, otimizado para SEO e focado em conteúdo.

### Estrutura de Arquivos

```
frontend-site/
├── public/
│   └── images/
│       └── icons/
│           └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── CTA.astro
│   │   ├── CardImpact.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
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
│   └── styles/
│       └── global.css
├── config/
│   └── site.ts
├── docs/
│   ├── BLUEPRINT.md
│   ├── ROUTES.md
│   ├── DESIGN_SYSTEM.md
│   └── SEO.md
└── astro.config.mjs
```

### Tecnologias
- **Framework:** Astro.js
- **Styling:** Tailwind CSS

---

## 2. Frontend - Dashboard da Plataforma (Angular)

O dashboard é o coração da plataforma, onde os usuários interagem com os recursos do projeto. Ele é dividido em três áreas de acesso distintas:

- **Aluno:** Acompanha progresso, acessa cursos, mentorias, certificados, etc.
- **Mentor:** Gerencia turmas, projetos, agenda e interage com os alunos.
- **Admin:** Visão geral da plataforma, gerenciamento de usuários, aprovações, hubs, etc.

### Estrutura de Arquivos

```
frontend-app/
└── src/
    └── app/
        ├── core/
        │   ├── guards/
        │   └── interceptors/
        ├── services/
        ├── shared/
        │   ├── components/
        │   ├── sidebar-student/
        │   ├── sidebar-mentor/
        │   ├── sidebar-admin/
        │   └── header/
        ├── layouts/
        │   ├── student-layout/
        │   ├── mentor-layout/
        │   └── admin-layout/
        └── modules/
            ├── student/
            │   ├── dashboard/
            │   ├── cursos/
            │   ├── aulas/
            │   ├── biblioteca/
            │   ├── progresso/
            │   ├── mentorias/
            │   ├── certificados/
            │   ├── ranking/
            │   ├── financeiro/
            │   ├── notificacoes/
            │   ├── perfil/
            │   └── configuracoes/
            ├── mentor/
            │   ├── dashboard/
            │   ├── turmas/
            │   ├── alunos/
            │   ├── projetos/
            │   ├── agenda/
            │   ├── relatorios/
            │   ├── comunidade/
            │   └── recursos/
            └── admin/
                ├── dashboard/
                ├── usuarios/
                ├── aprovacoes/
                ├── hubs/
                └── bolsas/
```
### Tecnologias
- **Framework:** Angular

---

## 3. HORIZON System (Astro.js)

O **HORIZON System** é o sistema de gestão da plataforma, construído com Astro.js. Ele fornece uma interface para administradores gerenciarem o conteúdo, usuários e configurações do projeto.

### Estrutura de Arquivos

```
src/
├── components/
│   └── horizon-system/
│       ├── Header.astro
│       ├── Sidebar.astro
│       └── Footer.astro
├── layouts/
│   └── HORIZONSystemLayout.astro
└── pages/
    └── sistem/
        ├── login.astro
        └── HORIZON-System/
            └── index.astro
```

---

## Como Executar

### Site Institucional (Astro)
```bash
# Navegue até a pasta do projeto Astro
cd frontend-site

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Dashboard (Angular)
```bash
# Navegue até a pasta do projeto Angular
cd frontend-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```
