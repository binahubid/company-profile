-- BinaHub contact form B2B fields
-- Run this in the Supabase SQL editor before relying on the new contact form fields.

alter table public.inquiries
  add column if not exists company text,
  add column if not exists role_title text;

alter table public.leads
  add column if not exists role_title text;

comment on column public.inquiries.company is 'Organization/company name submitted from the website contact form.';
comment on column public.inquiries.role_title is 'Job title or role submitted from the website contact form.';
comment on column public.leads.role_title is 'Latest known job title or role for the lead.';
