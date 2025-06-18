import { useEffect } from "react";
import { GetAllCountries, GetAllGenders, GetCityByStateId, GetStateByCountryId } from "../../Utils/Services/MasterServices";
import { ICities, ICountries, IGenders, IStates } from "../../Utils/ServiceInterfaces";

const Employees: React.FC = () => {
    useEffect(() => {
        // Get All Genders
        GetAllGenders()
            .then((data: IGenders[]) => {
                console.log(data);
            })
        // Get All Countries
        GetAllCountries()
            .then((data: ICountries[]) => {
                console.log(data);
            })
        // Get All States by Country Id
        GetStateByCountryId(1)
            .then((data: IStates[]) => {
                console.log(data);
            })
        // Get All Cities by State Id
        GetCityByStateId(1)
            .then((data: ICities[]) => {
                console.log(data);
            })
    }, [])
    return (
        <></>
    )
}

export default Employees;