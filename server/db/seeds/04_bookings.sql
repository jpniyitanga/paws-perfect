--Bookings table seeds

INSERT INTO bookings (start_date, end_date, status, sitter_review, sitter_rating, pet_id, owner_id, sitter_id) VALUES ('2023-08-17'::date, '2023-08-20'::date, 'accepted', NULL, NULL, 1, 1, 2);
INSERT INTO bookings (start_date, end_date, status, sitter_review, sitter_rating, pet_id, owner_id, sitter_id) VALUES ('2023-08-20'::date, '2023-08-23'::date, 'completed', 'I would highly recommend this pet sitting booking software to anyone looking to simplify their pet sitting bookings', NULL, 3, 3, 5);
INSERT INTO bookings (start_date, end_date, status, sitter_review, sitter_rating, pet_id, owner_id, sitter_id) VALUES ('2023-08-20'::date, '2023-08-23'::date, 'completed', 'It was very intuitive and user-friendly, so I did not have any trouble navigating the system.', 4, 5, 5, 1);
INSERT INTO bookings (start_date, end_date, status, sitter_review, sitter_rating, pet_id, owner_id, sitter_id) VALUES ('2023-08-18'::date, '2023-08-19'::date, 'pending', NULL, NULL, 5, 4, 5);