-- READ Operation
-- Get id user from specific email
SELECT id from "Users" WHERE email='fawwaz@gmail.com';
-- Count  all user
SELECT COUNT(*) from "Users";


-- Get link with user information (join)
SELECT *
FROM "Links" l
JOIN "Users" u ON l.created_by = u.id;
-- Get link with user information (join)
SELECT l.id, l.actual_link, l.shortened_link, u.email,u.username
FROM "Links" l
JOIN "Users" u ON l.created_by = u.id;

INSERT INTO "Links" (actual_link,shortened_link,created_by)
VALUES ('https://facebook.com/fawwaz','fawwaz-fb',(SELECT id FROM "Users" WHERE username='fawwaz'))

-- Get link created by specific user  (join)
SELECT l.id, l.actual_link, l.shortened_link, u.email,u.username
FROM "Links" l
JOIN "Users" u ON l.created_by = u.id
WHERE u.username = 'fawwaz'

-- UPDATE operation
-- MUST use WHERE or else it will update all data based on your set
-- BECAREFUL!!
UPDATE "Links"
SET actual_link = 'https://github.com/fawwaz-v1'
WHERE id = 1;

-- DELETE operation
DELETE FROM "Links" WHERE id = 1;