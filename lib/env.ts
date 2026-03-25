function requireServerEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Falta la variable de entorno requerida: ${name}`);
  }

  return value;
}

export const env = {
  ADMIN_PORTAL_EMAIL: requireServerEnv("ADMIN_PORTAL_EMAIL"),
  ADMIN_PORTAL_PASSWORD: requireServerEnv("ADMIN_PORTAL_PASSWORD"),
  ADMIN_PORTAL_SESSION_SECRET: requireServerEnv("ADMIN_PORTAL_SESSION_SECRET"),
};

export function hasSupabaseEnv() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(getSupabasePublicKey());
}

export function getPublicSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = getSupabasePublicKey();

  if (!url || !anonKey) {
    throw new Error(
      "Faltan variables de entorno de Supabase. Define NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY.",
    );
  }

  return { url, anonKey };
}

function getSupabasePublicKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}
