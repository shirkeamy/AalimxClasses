using CrudWebAPI_.Data;
using CrudWebAPI_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace CrudWebAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DbHelper _dbHelper;

        public EmployeeController(DbHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employees>> GetAllEmployee()
        {
            List<Employees> Employee = new();
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllEmployees", conn) { CommandType = CommandType.StoredProcedure };

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Employee.Add(new Employees
                {
                    EmployeeId = (int)reader["EmployeeId"],
                    EmployeeName = reader["EmployeeName"].ToString(),
                    EmployeeCode = reader["EmployeeCode"].ToString(),
                    Gender = reader["Gender"].ToString(),
                    DateOfBirth = (DateTime)reader["DateOfBirth"],
                    EmailId = reader["EmailId"].ToString(),
                    Telephone = reader["Telephone"].ToString(),
                    JobTitle = reader["JobTitle"].ToString(),
                    Salary = Convert.ToDouble(reader["Salary"]),
                    Address = reader["Address"].ToString(),
                    City = reader["City"].ToString(),
                    State = reader["State"].ToString(),
                    Country = reader["Country"].ToString()
                });
            }
            return Ok(Employee);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployeeById(int id)
        {
            Employee employee = null;
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllEmployeeByEmployeeId", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@EmployeeId", id);

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                employee = new Employee
                {
                    EmployeeId = (int)reader["EmployeeId"],
                    EmployeeName = reader["EmployeeName"].ToString(),
                    EmployeeCode = reader["EmployeeCode"].ToString(),
                    GenderId = (int)reader["GenderId"],
                    DateOfBirth = (DateTime)reader["DateOfBirth"],
                    EmailId = reader["EmailId"].ToString(),
                    Telephone = reader["Telephone"].ToString(),
                    JobTitle = reader["JobTitle"].ToString(),
                    Salary = Convert.ToDouble(reader["Salary"]),
                    Address = reader["Address"].ToString(),
                    CityId = (int)reader["CityId"],
                    StateId = (int)reader["StateId"],
                    CountryId = (int)reader["CountryId"]
                };
            }
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody] Employee employee)
        {
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_CreateEmployee", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
            cmd.Parameters.AddWithValue("@EmployeeCode", employee.EmployeeCode);
            cmd.Parameters.AddWithValue("@GenderId", employee.GenderId);
            cmd.Parameters.AddWithValue("@DateOfBirth", employee.DateOfBirth);
            cmd.Parameters.AddWithValue("@EmailId", employee.EmailId);
            cmd.Parameters.AddWithValue("@Telephone", employee.Telephone);
            cmd.Parameters.AddWithValue("@JobTitle", employee.JobTitle);
            cmd.Parameters.AddWithValue("@Salary", employee.Salary);
            cmd.Parameters.AddWithValue("@Address", employee.Address);
            cmd.Parameters.AddWithValue("@CityId", employee.CityId);
            cmd.Parameters.AddWithValue("@StateId", employee.StateId);
            cmd.Parameters.AddWithValue("@CountryId", employee.CountryId);

            conn.Open();
            cmd.ExecuteNonQuery();
            return Ok("Employee created successfully.");
        }

        [HttpPut]
        public IActionResult UpdateEmployee([FromBody] Employee employee)
        {
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_UpdateEmployee", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@EmployeeId", employee.EmployeeId);
            cmd.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
            cmd.Parameters.AddWithValue("@EmployeeCode", employee.EmployeeCode);
            cmd.Parameters.AddWithValue("@GenderId", employee.GenderId);
            cmd.Parameters.AddWithValue("@DateOfBirth", employee.DateOfBirth);
            cmd.Parameters.AddWithValue("@EmailId", employee.EmailId);
            cmd.Parameters.AddWithValue("@Telephone", employee.Telephone);
            cmd.Parameters.AddWithValue("@JobTitle", employee.JobTitle);
            cmd.Parameters.AddWithValue("@Salary", employee.Salary);
            cmd.Parameters.AddWithValue("@Address", employee.Address);
            cmd.Parameters.AddWithValue("@CityId", employee.CityId);
            cmd.Parameters.AddWithValue("@StateId", employee.StateId);
            cmd.Parameters.AddWithValue("@CountryId", employee.CountryId);

            conn.Open();
            cmd.ExecuteNonQuery();
            return Ok("Employee updated successfully.");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_DeleteEmployee", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@EmployeeId", id);

            conn.Open();
            cmd.ExecuteNonQuery();
            return Ok("Employee deleted successfully.");
        }
    }
}
