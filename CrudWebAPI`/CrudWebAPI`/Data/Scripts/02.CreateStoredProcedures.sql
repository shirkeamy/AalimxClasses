CREATE PROCEDURE SP_GetAllGenders
AS
BEGIN
    SELECT GenderId, Gender FROM Genders;
END
GO

CREATE PROCEDURE SP_GetAllCountries
AS
BEGIN
    SELECT CountryId, Country FROM Countries;
END
GO
CREATE PROCEDURE SP_GetAllStatesByCountryId
    @CountryId INT
AS
BEGIN
    SELECT StateId, State, CountryId FROM States WHERE CountryId = @CountryId;
END
GO
CREATE PROCEDURE SP_GetAllCitiesByStateId
    @StateId INT
AS
BEGIN
    SELECT CityId, City, StateId FROM Cities WHERE StateId = @StateId;
END
GO

CREATE PROCEDURE SP_GetAllEmployees
AS
BEGIN
    SELECT 
        e.EmployeeId,
        e.EmployeeName,
        e.EmployeeCode,
        e.GenderId,
        g.Gender,
        e.DateOfBirth,
        e.EmailId,
        e.Telephone,
        e.JobTitle,
        e.Salary,
        e.Address,
        e.CityId,
        c.City,
        e.StateId,
        s.State,
        e.CountryId,
        co.Country
    FROM Employees e
    JOIN Genders g ON e.GenderId = g.GenderId
    JOIN Cities c ON e.CityId = c.CityId
    JOIN States s ON e.StateId = s.StateId
    JOIN Countries co ON e.CountryId = co.CountryId;
END
GO
CREATE PROCEDURE SP_GetAllEmployeeByEmployeeId
    @EmployeeId INT
AS
BEGIN
    SELECT 
        e.EmployeeId,
        e.EmployeeName,
        e.EmployeeCode,
        e.GenderId,
        g.Gender,
        e.DateOfBirth,
        e.EmailId,
        e.Telephone,
        e.JobTitle,
        e.Salary,
        e.Address,
        e.CityId,
        c.City,
        e.StateId,
        s.State,
        e.CountryId,
        co.Country
    FROM Employees e
    JOIN Genders g ON e.GenderId = g.GenderId
    JOIN Cities c ON e.CityId = c.CityId
    JOIN States s ON e.StateId = s.StateId
    JOIN Countries co ON e.CountryId = co.CountryId
    WHERE e.EmployeeId = @EmployeeId;
END
GO
CREATE PROCEDURE SP_CreateEmployee
    @EmployeeName NVARCHAR(100),
    @EmployeeCode NVARCHAR(50),
    @GenderId INT,
    @DateOfBirth DATETIME,
    @EmailId NVARCHAR(100),
    @Telephone CHAR(10),
    @JobTitle NVARCHAR(100),
    @Salary FLOAT,
    @Address NVARCHAR(250),
    @CityId INT,
    @StateId INT,
    @CountryId INT
AS
BEGIN
    INSERT INTO Employees (
        EmployeeName, EmployeeCode, GenderId, DateOfBirth, EmailId, Telephone, 
        JobTitle, Salary, Address, CityId, StateId, CountryId
    ) VALUES (
        @EmployeeName, @EmployeeCode, @GenderId, @DateOfBirth, @EmailId, @Telephone,
        @JobTitle, @Salary, @Address, @CityId, @StateId, @CountryId
    );
END
GO
CREATE PROCEDURE SP_UpdateEmployee
    @EmployeeId INT,
    @EmployeeName NVARCHAR(100),
    @EmployeeCode NVARCHAR(50),
    @GenderId INT,
    @DateOfBirth DATETIME,
    @EmailId NVARCHAR(100),
    @Telephone CHAR(10),
    @JobTitle NVARCHAR(100),
    @Salary FLOAT,
    @Address NVARCHAR(250),
    @CityId INT,
    @StateId INT,
    @CountryId INT
AS
BEGIN
    UPDATE Employees SET
        EmployeeName = @EmployeeName,
        EmployeeCode = @EmployeeCode,
        GenderId = @GenderId,
        DateOfBirth = @DateOfBirth,
        EmailId = @EmailId,
        Telephone = @Telephone,
        JobTitle = @JobTitle,
        Salary = @Salary,
        Address = @Address,
        CityId = @CityId,
        StateId = @StateId,
        CountryId = @CountryId
    WHERE EmployeeId = @EmployeeId;
END
GO
CREATE PROCEDURE SP_DeleteEmployee
    @EmployeeId INT
AS
BEGIN
    DELETE FROM Employees WHERE EmployeeId = @EmployeeId;
END
GO

