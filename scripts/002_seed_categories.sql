INSERT INTO public.categories (name, type, color) VALUES
  ('Alimentação', 'expense', '#ef4444'),
  ('Transporte', 'expense', '#f59e0b'),
  ('Moradia', 'expense', '#8b5cf6'),
  ('Saúde', 'expense', '#ec4899'),
  ('Educação', 'expense', '#3b82f6'),
  ('Lazer', 'expense', '#06b6d4'),
  ('Compras', 'expense','#f97316'),
  ('Contas', 'expense', '#64748b'),
  ('Outros', 'expense', '#6b7280')
ON CONFLICT DO NOTHING;

INSERT INTO public.categories (name, type, color) VALUES
  ('Salário', 'income', '#10b981'),
  ('Freelance', 'income', '#22c55e'),
  ('Investimentos','📈', '#14b8a6'),
  ('Bônus', 'income','#84cc16'),
  ('Outros', 'income', '#059669')
ON CONFLICT DO NOTHING;
