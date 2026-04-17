-- ============================================================
-- Proagrar Customer Portal — Full Database Setup
-- Run in this order in Supabase SQL Editor:
--   1. This file  (schema + portal auth column + RLS)
--   2. C:\...\Supabase\02_import_customers.sql
--   3. C:\...\Supabase\03_import_fields.sql
-- ============================================================


-- ------------------------------------------------------------
-- CUSTOMERS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS customers (
  id                uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name      text          NOT NULL,
  contact_name      text,
  email             text          UNIQUE,
  phone             text,
  address_street    text,
  address_city      text,
  address_post_code text,
  country           text          NOT NULL DEFAULT 'Slovenia',
  vat_number        text,
  notes             text,
  -- extra columns added by import script
  partner_id        text,
  naziv             text,
  sales_person      text,
  -- portal login
  portal_password   text,
  created_at        timestamptz   NOT NULL DEFAULT now()
);


-- ------------------------------------------------------------
-- FIELDS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS fields (
  id              uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id     uuid          NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  name            text          NOT NULL,
  area_ha         numeric(10,4),
  cadastre_id     text,
  culture         text,
  soil_type       text,
  location_notes  text,
  created_at      timestamptz   NOT NULL DEFAULT now()
);


-- ------------------------------------------------------------
-- ORDERS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
  id              uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id     uuid          NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  order_number    text          NOT NULL UNIQUE,
  status          text          NOT NULL DEFAULT 'new',
                                -- new | confirmed | in_progress | completed | cancelled
  order_date      date          NOT NULL DEFAULT current_date,
  service_date    date,
  service_type    text,
  total_price     numeric(12,2),
  notes           text,
  created_at      timestamptz   NOT NULL DEFAULT now()
);


-- ------------------------------------------------------------
-- REPORTS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS reports (
  id               uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id      uuid          NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  order_id         uuid          REFERENCES orders(id) ON DELETE SET NULL,
  field_id         uuid          REFERENCES fields(id) ON DELETE SET NULL,
  report_number    text          NOT NULL UNIQUE,
  title            text,         -- human-readable name, e.g. "Angus 05_24"
  year             text,         -- e.g. "2024", "2025"
  type             text,         -- soil_analysis | yield_map | scouting
  report_date      date          NOT NULL DEFAULT current_date,
  file_path        text,         -- URL to PDF report
  url_kalkulacija  text,         -- URL to calculation Excel
  notes            text,         -- URL to SharePoint folder
  created_at       timestamptz   NOT NULL DEFAULT now()
);


-- ------------------------------------------------------------
-- INDEXES
-- ------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_fields_customer   ON fields  (customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer   ON orders  (customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status     ON orders  (status);
CREATE INDEX IF NOT EXISTS idx_reports_customer  ON reports (customer_id);
CREATE INDEX IF NOT EXISTS idx_reports_order     ON reports (order_id);
CREATE INDEX IF NOT EXISTS idx_reports_field     ON reports (field_id);
CREATE INDEX IF NOT EXISTS idx_customers_partner ON customers (partner_id);


-- ------------------------------------------------------------
-- RLS (Row Level Security)
-- ------------------------------------------------------------
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE fields    ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders    ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports   ENABLE ROW LEVEL SECURITY;

-- Service role (server/backend) has full access
CREATE POLICY "service role full access on customers"
  ON customers FOR ALL USING (true);

CREATE POLICY "service role full access on fields"
  ON fields FOR ALL USING (true);

CREATE POLICY "service role full access on orders"
  ON orders FOR ALL USING (true);

CREATE POLICY "service role full access on reports"
  ON reports FOR ALL USING (true);
