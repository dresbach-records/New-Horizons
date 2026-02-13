Perfeito.
Vou ajustar seu Blueprint para virar um documento técnico completo, aplicável a todo o projeto (site público + sistema + dashboard + regras de importação + imagens + comandos de análise).

Abaixo está a versão estruturada e expandida para uso institucional e técnico.

BLUEPRINT TÉCNICO COMPLETO
HORIZON System – Projeto Novos Horizonte
1. ARQUITETURA GERAL DO PROJETO

Estrutura recomendada:

src/
 ├── assets/
 │    ├── images/
 │    ├── icons/
 │
 ├── components/
 │    ├── ui/
 │    ├── forms/
 │    ├── cards/
 │    ├── charts/
 │
 ├── layouts/
 │    ├── PublicLayout.astro
 │    ├── HORIZONSystemLayout.astro
 │    ├── SiteLayout.astro
 │
 ├── modules/
 │    ├── horizon/
 │    ├── academy/
 │    ├── admin/
 │
 ├── pages/
 │    ├── site/
 │    ├── sistem/
 │
 ├── styles/
 │    ├── global.css
 │
 ├── lib/
 │    ├── utils.ts
 │    ├── constants.ts

2. PADRÃO DE IMPORTAÇÃO (OBRIGATÓRIO)
❌ Proibido
../../../
../../../../

✅ Obrigatório: Alias

Configuração:

tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@layouts/*": ["src/layouts/*"],
      "@components/*": ["src/components/*"],
      "@modules/*": ["src/modules/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@lib/*": ["src/lib/*"]
    }
  }
}

astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@modules': path.resolve('./src/modules'),
        '@assets': path.resolve('./src/assets'),
        '@styles': path.resolve('./src/styles'),
        '@lib': path.resolve('./src/lib')
      }
    }
  }
});

3. ORGANIZAÇÃO DE IMAGENS
❌ Nunca usar imagem direto no HTML assim:
<img src="../../../assets/logo.png">

✅ Correto

Colocar imagens em:

src/assets/images/


Importar assim:

---
import logo from '@assets/images/logo.png';
---

<img src={logo} alt="Logo HORIZON" />


Para imagens públicas (SEO, OpenGraph):

public/images/

4. DIVISÃO ENTRE SITE E SISTEMA
4.1 SITE PÚBLICO
src/pages/site/


Exemplos:

home.astro

sobre.astro

impacto.astro

parceiros.astro

contato.astro

Layout:

SiteLayout.astro

4.2 SISTEMA (ÁREA INTERNA)
src/pages/sistem/


Subestrutura:

/sistem/login
/sistem/recuperar-senha
/sistem/solicitar-acesso

/sistem/horizon/

5. MÓDULO HORIZON (ÁREA AUTENTICADA)
src/pages/sistem/horizon/


Páginas:

index.astro (Dashboard)

cadastros.astro

ongs.astro

espacos.astro

micropolos.astro

captacao.astro

aprovacoes.astro

relatorios.astro

perfil.astro

Layout:

HORIZONSystemLayout.astro

6. FLUXOS MULTI-ETAPA

Colocar dentro de:

src/pages/sistem/horizon/registrations/


ONG:

ong-step-1.astro

ong-step-2.astro

ong-step-3.astro

ong-step-4.astro

Espaço:

espaco-step-1.astro

espaco-step-2.astro

espaco-step-3.astro

7. PADRÃO VISUAL GLOBAL
Tema

Fundo principal:

#0f172a


Accent:

#22c55e

tailwind.config.js
extend: {
  colors: {
    accent: '#22c55e',
    primaryDark: '#0f172a'
  }
}

8. PADRÃO DE COMPONENTES

Criar componentes reutilizáveis:

components/ui/Button.astro
components/ui/Input.astro
components/ui/Card.astro
components/ui/Badge.astro
components/ui/Table.astro
components/ui/Modal.astro


Nunca repetir HTML complexo em múltiplas páginas.

9. REGRAS IMPORTANTES

✔ Todo formulário usa classe .input-dark
✔ Todo botão primário usa bg-accent
✔ Todo status usa Badge component
✔ Nenhuma página usa caminho relativo profundo
✔ Nenhuma imagem usa caminho quebrado
✔ Nenhum CSS fora de @layer quando usar @apply

10. COMANDOS PARA ANALISAR O PROJETO INTEIRO
Verificar Astro
npx astro check

Rodar Dev
npm run dev

Testar build final
npm run build

Procurar todos os ../../../
grep -r "\.\./\.\./\.\./" src

Procurar imagens com caminho relativo
grep -r "<img src=\"\.\." src

11. PADRÃO DE SEGURANÇA

Área sistem só acessível autenticado

Middleware para validar sessão

Página de login isolada

Fluxo de aprovação centralizado

12. OBJETIVO ARQUITETURAL

Transformar o projeto em:

Estrutura modular

Escalável

Sem imports frágeis

Sem CSS quebrando

Com governança técnica

Pronto para expansão internacional