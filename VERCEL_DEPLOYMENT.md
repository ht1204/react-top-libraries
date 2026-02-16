# Despliegue en Vercel - Guía de Actualización

## ✅ Cambios Realizados

Este proyecto ha sido actualizado para cumplir con los requisitos de Vercel para Node.js 22.x:

### 1. **package.json**
- ✅ Agregado `"engines": { "node": "22.x" }` para especificar la versión de Node.js

### 2. **vercel.json**
- ✅ Creado archivo de configuración de Vercel con:
  - `buildCommand`: Comando de construcción optimizado
  - `outputDirectory`: Carpeta de salida (dist)
  - `installCommand`: Instalación con `--legacy-peer-deps`
  - `framework`: Vite detectado automáticamente

### 3. **.nvmrc**
- ✅ Creado para desarrollo local con Node.js 22

## 🚀 Cómo Desplegar

### Opción 1: Desde el Dashboard de Vercel (Recomendado)
1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Ve a **Settings** → **Build and Deployment**
4. En **Node.js Version**, selecciona **22.x**
5. Haz clic en **Save**
6. Realiza un nuevo despliegue

### Opción 2: Despliegue Automático desde Git
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la versión de Node.js desde `package.json`
3. Cada push activará un despliegue automático

### Opción 3: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel@latest

# Verificar proyectos que requieren actualización
vercel project ls --update-required --scope VERCEL_TEAM_SLUG

# Desplegar
vercel --prod
```

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de:

1. **Instalar dependencias localmente** (opcional, para verificar):
   ```bash
   npm run install-deps
   # o
   npm install --legacy-peer-deps
   ```

2. **Probar el build localmente**:
   ```bash
   npm run build
   ```

3. **Probar en modo preview**:
   ```bash
   npm run preview
   ```

## ⚙️ Configuración de Vercel

Las siguientes configuraciones están en `vercel.json`:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install --legacy-peer-deps`
- **Framework**: Vite
- **Node.js Version**: 22.x (desde `package.json`)

## 🔧 Solución de Problemas

### Error: "Node.js version mismatch"
- Verifica que `package.json` tenga `"node": "22.x"` en `engines`
- En el Dashboard de Vercel, ve a Settings y confirma la versión de Node.js

### Error: "Peer dependencies"
- El proyecto usa `--legacy-peer-deps` para resolver conflictos
- Esto está configurado en `vercel.json` como `installCommand`

### Error en el Build
- Revisa los logs en el Dashboard de Vercel
- Asegúrate de que el build funciona localmente: `npm run build`

## 📚 Recursos

- [Documentación de Vercel - Node.js](https://vercel.com/docs/functions/runtimes/node-js)
- [Guía de Despliegue de Vite](https://vitejs.dev/guide/static-deploy.html)
- [Actualización de Node.js en Vercel](https://vercel.com/changelog/node-js-version-update)

## 🎯 Siguiente Paso

**¡Tu proyecto está listo para desplegarse en Vercel!**

Simplemente:
1. Haz commit de estos cambios
2. Push a tu repositorio
3. Vercel desplegará automáticamente con Node.js 22.x

O usa el comando:
```bash
vercel --prod
```

