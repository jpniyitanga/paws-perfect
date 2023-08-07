--Bookings table seeds

INSERT INTO bookings (start_date, end_date, status,  pet_id, owner_id, sitter_id) VALUES ('2023-08-17'::date, '2023-08-20'::date, 'accepted', 1, 1, 2);
INSERT INTO bookings (start_date, end_date, status,  pet_id, owner_id, sitter_id) VALUES ('2023-08-20'::date, '2023-08-23'::date, 'completed', 3, 3, 5);
INSERT INTO bookings (start_date, end_date, status,  pet_id, owner_id, sitter_id) VALUES ('2023-08-20'::date, '2023-08-23'::date, 'completed', 5, 5, 1);
INSERT INTO bookings (start_date, end_date, status,  pet_id, owner_id, sitter_id) VALUES ('2023-08-18'::date, '2023-08-19'::date, 'pending', 5, 4, 5);