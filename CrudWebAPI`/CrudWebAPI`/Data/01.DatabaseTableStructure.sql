-- 1. Countries Table
CREATE TABLE Countries (
    CountryId INT PRIMARY KEY IDENTITY(1,1),
    Country NVARCHAR(100) NOT NULL
);

-- 2. States Table
CREATE TABLE States (
    StateId INT PRIMARY KEY IDENTITY(1,1),
    State NVARCHAR(100) NOT NULL,
    CountryId INT NOT NULL,
    FOREIGN KEY (CountryId) REFERENCES Countries(CountryId) ON DELETE CASCADE
);

-- 3. Cities Table
CREATE TABLE Cities (
    CityId INT PRIMARY KEY IDENTITY(1,1),
    City NVARCHAR(100) NOT NULL,
    StateId INT NOT NULL,
    FOREIGN KEY (StateId) REFERENCES States(StateId) ON DELETE CASCADE
);

-- 4. Genders Table
CREATE TABLE Genders (
    GenderId INT PRIMARY KEY IDENTITY(1,1),
    Gender NVARCHAR(50) NOT NULL
);

-- 5. Employee Table
CREATE TABLE Employees (
    EmployeeId INT PRIMARY KEY IDENTITY(1,1),
    EmployeeName NVARCHAR(100) NOT NULL,
    EmployeeCode NVARCHAR(50) NOT NULL,
    GenderId INT NOT NULL,
    DateOfBirth DATETIME NOT NULL,
    EmailId NVARCHAR(100),
    Telephone CHAR(10),
    JobTitle NVARCHAR(100),
    Salary FLOAT,
    Address NVARCHAR(250),
    CityId INT NOT NULL,
    StateId INT NOT NULL,
    CountryId INT NOT NULL,
    FOREIGN KEY (GenderId) REFERENCES Genders(GenderId),
    FOREIGN KEY (CityId) REFERENCES Cities(CityId),
    FOREIGN KEY (StateId) REFERENCES States(StateId),
    FOREIGN KEY (CountryId) REFERENCES Countries(CountryId)
);
