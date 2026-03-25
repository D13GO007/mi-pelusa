# Mi Pelusa

Proyecto Astro preparado para desplegarse en Vercel con:

- una ruta API para registrar visitas en Supabase
- una portada redirigida a la página 1 del libro
- una maquetación tipo libro antiguo, optimizada para móvil

## Variables de entorno

Crea el archivo `.env` con estos valores:

```env
SUPABASE_URL=https://zefgfouxfnuqurspvaze.supabase.co
SUPABASE_KEY=tu_anon_key_de_supabase
SUPABASE_SERVICE_ROLE_KEY=opcional_recomendado_para_servidor
```

En Vercel debes configurar las mismas variables en el dashboard del proyecto.

Nota:

- si defines `SUPABASE_SERVICE_ROLE_KEY`, la API la usa primero (recomendado para escritura desde servidor)
- si no existe, usa `SUPABASE_KEY`

## Instalación

```sh
npm install
```

## Desarrollo local

```sh
npm run dev
```

## Validación

```sh
npm run check
npm run build
```

## Estructura principal

```text
src/
├── layouts/
│   └── Layout.astro
└── pages/
	├── index.astro
	└── page/
		├── 1.astro
		└── 2.astro

api/
└── track.js
```

## Flujo del enlace compartido

Comparte este enlace:

```text
https://tu-libro.vercel.app/api/track?quien=NombreDeElla
```

La ruta:

1. lee el valor de `quien`
2. lo guarda en la tabla `clics` de Supabase
3. redirige a `/page/1`

Si falta el parámetro o Supabase falla, la experiencia no se rompe: igual redirige a `/page/1`.

## Preparar base de datos

1. Abre SQL Editor en Supabase.
2. Ejecuta el script [supabase/setup.sql](supabase/setup.sql).
3. Verifica que exista la tabla `public.clics`.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio Git.
2. Importa el repositorio en Vercel.
3. Añade `SUPABASE_URL` y `SUPABASE_KEY` en las variables de entorno.
4. Ejecuta el despliegue.
