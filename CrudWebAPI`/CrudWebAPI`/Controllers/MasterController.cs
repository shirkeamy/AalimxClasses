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
    public class MasterController : ControllerBase
    {
        private readonly DbHelper _dbHelper;

        public MasterController(DbHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        [HttpGet("genders")]
        public ActionResult<IEnumerable<Genders>> GetAllGenders()
        {
            List<Genders> genders = new();
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllGenders", conn) { CommandType = CommandType.StoredProcedure };

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                genders.Add(new Genders
                {
                    GenderId = (int)reader["GenderId"],
                    Gender = reader["Gender"].ToString()
                });
            }
            return Ok(genders);
        }

        [HttpGet("countries")]
        public ActionResult<IEnumerable<Countries>> GetAllCountries()
        {
            List<Countries> countries = new();
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllCountries", conn) { CommandType = CommandType.StoredProcedure };

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                countries.Add(new Countries
                {
                    CountryId = (int)reader["CountryId"],
                    Country = reader["Country"].ToString()
                });
            }
            return Ok(countries);
        }

        [HttpGet("states/{countryId}")]
        public ActionResult<IEnumerable<States>> GetStatesByCountryId(int countryId)
        {
            List<States> states = new();
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllStatesByCountryId", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@CountryId", countryId);

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                states.Add(new States
                {
                    StateId = (int)reader["StateId"],
                    State = reader["State"].ToString(),
                    CountryId = (int)reader["CountryId"]
                });
            }
            return Ok(states);
        }

        [HttpGet("cities/{stateId}")]
        public ActionResult<IEnumerable<Cities>> GetCitiesByStateId(int stateId)
        {
            List<Cities> cities = new();
            using SqlConnection conn = _dbHelper.GetConnection();
            using SqlCommand cmd = new("SP_GetAllCitiesByStateId", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@StateId", stateId);

            conn.Open();
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                cities.Add(new Cities
                {
                    CityId = (int)reader["CityId"],
                    City = reader["City"].ToString(),
                    StateId = (int)reader["StateId"]
                });
            }
            return Ok(cities);
        }
    }
}
