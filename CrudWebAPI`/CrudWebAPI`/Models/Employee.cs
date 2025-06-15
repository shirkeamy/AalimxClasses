namespace CrudWebAPI_.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; } // This is primary key and non editable on UI
        public string EmployeeName { get; set; } // This is editable on UI in Text box
        public string EmployeeCode { get; set; } // This is editable on UI in Text box
        public int GenderId { get; set; } // This is editable on UI in readio buttons
        public DateTime DateOfBirth { get; set; } // This is editable on UI in DatePicker
        public string EmailId { get; set; } // This is editable on UI in Text box
        public string Telephone { get; set; } // This is editable on UI in Text box with 10 digit limit
        public string JobTitle { get; set; } // This is editable on UI in Text box
        public double Salary { get; set; } // This is editable on UI in Text box with decimal limit
        public string Address { get; set; } // This is editable on UI in Text area
        public int CityId { get; set; } // This is editable on UI in dropdown depends on state selection
        public int StateId { get; set; } // This is editable on UI in dropdown depends on country selection
        public int CountryId { get; set; } // This is editable on UI in dropdown
    }
}
