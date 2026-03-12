# Departamento Educativo - Zona Este

Portal oficial de informacion para la Convocatoria y Curso de Capacitacion Ministerial 2026, construido con Next.js App Router, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior
- Cuenta de Vercel
- Proyecto de Supabase

## Instalacion local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre `http://localhost:3000`.

## Variables de entorno

Define estas variables en `.env.local` y tambien en Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

En v1 el sitio no depende de base de datos ni autenticacion, pero la integracion queda preparada para futuras fases.

## Supabase

La base de integracion esta en:

- `lib/env.ts`
- `lib/supabase/client.ts`
- `lib/supabase/server.ts`

Uso recomendado:

- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` para lecturas publicas y futuras funciones cliente.
- `SUPABASE_SERVICE_ROLE_KEY` solo para server actions, scripts o rutas protegidas futuras. No exponerla al navegador.

## Vercel

El proyecto incluye `vercel.json` con la configuracion minima para despliegue.

Flujo recomendado:

1. Crea un nuevo proyecto en Vercel e importa este repositorio.
2. Define las variables de entorno del archivo `.env.example`.
3. Ejecuta el primer deploy.
4. Si trabajas con la CLI, usa `vercel link` y luego `vercel env pull .env.local`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Git y sincronizacion

Este directorio aun no esta inicializado como repositorio Git.

Si quieres dejarlo listo para commit:

```bash
git init
git add .
git commit -m "Initial site setup"
```

Luego puedes conectarlo a tu Source Control Center remoto y sincronizar.
