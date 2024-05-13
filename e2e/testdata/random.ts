import { EmployeeDetails } from "./orangehrminterface";
import { faker } from '@faker-js/faker';
export function getRandomEmployeeDetails():EmployeeDetails{
    return {
        firstName: faker.person.firstName.toString(),
        middleName: faker.person.middleName.toString(),
        lastName: faker.person.lastName.toString(),
        employeeId:faker.number.int(1000).toString()
    }
}