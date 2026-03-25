create table if not exists public.clics (
  id bigint generated always as identity primary key,
  quien text not null check (char_length(quien) between 1 and 120),
  created_at timestamptz not null default now()
);

alter table public.clics enable row level security;

drop policy if exists "allow anon insert clics" on public.clics;
create policy "allow anon insert clics"
  on public.clics
  for insert
  to anon
  with check (true);
