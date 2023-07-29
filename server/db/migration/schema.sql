-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS sitters CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS messages CASCADE;


CREATE TABLE owners (
	id SERIAL PRIMARY KEY NOT NULL, 
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50) NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) NOT NULL,
	type VARCHAR(50) CHECK(type IN ('cat', 'dog')),
	description VARCHAR(500) NOT NULL,
	image_url VARCHAR(250),
	owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE
);

CREATE TABLE sitters (
	id SERIAL PRIMARY KEY NOT NULL,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50) NOT NULL,
  accepted_pet_type TEXT[] CHECK ('cat' = ANY (accepted_pet_type) OR 'dog' = ANY (accepted_pet_type)),
  availability_dates DATE[]
);


CREATE TABLE bookings (
  id SERIAL PRIMARY KEY NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE CHECK (end_date > start_date) NOT NULL,
  status VARCHAR(50) CHECK(status IN ('pending', 'accepted', 'completed')) DEFAULT 'pending',
  sitter_review TEXT DEFAULT NULL,
  sitter_rating INTEGER DEFAULT NULL,
  pet_id INTEGER REFERENCES pets(id) ON DELETE CASCADE,
  owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE,
  sitter_id INTEGER REFERENCES sitters(id) ON DELETE CASCADE
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES owners(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES sitters(id) ON DELETE CASCADE,
  booking_id INTEGER REFERENCES bookings(id) ON DELETE CASCADE,
  message_content TEXT NOT NULL
);

