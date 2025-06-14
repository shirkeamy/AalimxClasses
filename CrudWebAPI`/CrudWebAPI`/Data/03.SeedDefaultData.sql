-- ================================================
-- SEED MASTER DATA WITH RELATIONSHIP LOOKUPS
-- ================================================

-- Countries
INSERT INTO Countries (Country) VALUES 
('India'),
('United States'),
('Canada');

-- States (Country-based)
INSERT INTO States (State, CountryId)
SELECT 'Maharashtra', CountryId FROM Countries WHERE Country = 'India';

INSERT INTO States (State, CountryId)
SELECT 'Karnataka', CountryId FROM Countries WHERE Country = 'India';

INSERT INTO States (State, CountryId)
SELECT 'Delhi', CountryId FROM Countries WHERE Country = 'India';

INSERT INTO States (State, CountryId)
SELECT 'California', CountryId FROM Countries WHERE Country = 'United States';

INSERT INTO States (State, CountryId)
SELECT 'Texas', CountryId FROM Countries WHERE Country = 'United States';

INSERT INTO States (State, CountryId)
SELECT 'New York', CountryId FROM Countries WHERE Country = 'United States';

INSERT INTO States (State, CountryId)
SELECT 'Ontario', CountryId FROM Countries WHERE Country = 'Canada';

INSERT INTO States (State, CountryId)
SELECT 'Quebec', CountryId FROM Countries WHERE Country = 'Canada';

INSERT INTO States (State, CountryId)
SELECT 'British Columbia', CountryId FROM Countries WHERE Country = 'Canada';

-- Cities (State-based)
INSERT INTO Cities (City, StateId)
SELECT 'Mumbai', StateId FROM States WHERE State = 'Maharashtra';

INSERT INTO Cities (City, StateId)
SELECT 'Pune', StateId FROM States WHERE State = 'Maharashtra';

INSERT INTO Cities (City, StateId)
SELECT 'Nagpur', StateId FROM States WHERE State = 'Maharashtra';

INSERT INTO Cities (City, StateId)
SELECT 'Bengaluru', StateId FROM States WHERE State = 'Karnataka';

INSERT INTO Cities (City, StateId)
SELECT 'Mysuru', StateId FROM States WHERE State = 'Karnataka';

INSERT INTO Cities (City, StateId)
SELECT 'New Delhi', StateId FROM States WHERE State = 'Delhi';

INSERT INTO Cities (City, StateId)
SELECT 'Los Angeles', StateId FROM States WHERE State = 'California';

INSERT INTO Cities (City, StateId)
SELECT 'San Francisco', StateId FROM States WHERE State = 'California';

INSERT INTO Cities (City, StateId)
SELECT 'Houston', StateId FROM States WHERE State = 'Texas';

INSERT INTO Cities (City, StateId)
SELECT 'Dallas', StateId FROM States WHERE State = 'Texas';

INSERT INTO Cities (City, StateId)
SELECT 'New York City', StateId FROM States WHERE State = 'New York';

INSERT INTO Cities (City, StateId)
SELECT 'Toronto', StateId FROM States WHERE State = 'Ontario';

INSERT INTO Cities (City, StateId)
SELECT 'Ottawa', StateId FROM States WHERE State = 'Ontario';

INSERT INTO Cities (City, StateId)
SELECT 'Montreal', StateId FROM States WHERE State = 'Quebec';

INSERT INTO Cities (City, StateId)
SELECT 'Vancouver', StateId FROM States WHERE State = 'British Columbia';

-- Genders
INSERT INTO Genders (Gender) VALUES 
('Male'),
('Female'),
('Other'),
('Prefer not to say');


select * from Countries
select * from States
select * from Cities
select * from Genders
select * from Employees
