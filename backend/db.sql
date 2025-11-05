-- Rewardo DB schema and seed
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  country VARCHAR(5),
  is_admin BOOLEAN DEFAULT FALSE,
  total_points INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS points (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  points INT NOT NULL,
  reason TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS partners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  api_endpoint TEXT,
  api_key TEXT,
  active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS offers (
  id VARCHAR(100) PRIMARY KEY,
  partner_id INT,
  title TEXT,
  description TEXT,
  reward_points INT,
  link TEXT,
  location VARCHAR(10),
  status VARCHAR(20) DEFAULT 'active',
  date_added TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS completions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  offer_id VARCHAR(100),
  partner_id INT,
  points_awarded INT,
  date_completed TIMESTAMP DEFAULT now(),
  status VARCHAR(20)
);

-- seed admin and test user
INSERT INTO users (email, password, country, is_admin, total_points)
VALUES ('admin@rewardo.local','adminpass','FR',true,0)
ON CONFLICT (email) DO NOTHING;

INSERT INTO users (email, password, country, is_admin, total_points)
VALUES ('test@rewardo.local','password','FR',false,0)
ON CONFLICT (email) DO NOTHING;

-- sample offers
INSERT INTO offers (id, partner_id, title, description, reward_points, link, location, status)
VALUES
('local-offer-001', null, 'Sondage FR rapide', 'Questionnaire sur habitudes (FR)', 100, 'https://example.com/offer1', 'FR', 'active'),
('local-offer-002', null, 'Sondage US rapide', 'Questionnaire (US)', 80, 'https://example.com/offer2', 'US', 'active')
ON CONFLICT (id) DO NOTHING;
