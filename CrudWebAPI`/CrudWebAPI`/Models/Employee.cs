namespace CrudWebAPI_.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeCode { get; set; }
        public int GenderId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string EmailId { get; set; }
        public string Telephone { get; set; }
        public string JobTitle { get; set; }
        public double Salary { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public int StateId { get; set; }
        public int CountryId { get; set; }
    }
}
