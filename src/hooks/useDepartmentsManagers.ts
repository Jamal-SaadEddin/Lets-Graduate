import axios from "axios";
import { AdminDepartment } from "../constants/departments";
import { setAdminDepartments } from "../state-management/Admin/adminSettingsStore";

export const getAllDepartmentsManagersData = async () => {
  try {
    // const response = await axios.get<AdminDepartment[]>(
    //   `http://localhost:3000/allDepartments/departments`
    // );
    // const fetchedDepartments = response.data;

    setAdminDepartments([
      {
        departmentName: "Architectural Engineering",
        departmentManager: "Mohammad Shatara - 1576",
        allDoctors: [
          "Mohammed Handai - 1574",
          "Tamer Mani - 1575",
          "Mohammad Shatara - 1576",
        ],
      },
      {
        departmentName: "Chemical Engineering",
        departmentManager: "Adam Atoot - 1581",
        allDoctors: [
          "Mahmoud Saad - 1142",
          "Rameh Radad - 1580",
          "Adam Atoot - 1581",
          "Ziad Melhem - 1582",
          "Ahmad Kaman - 1989",
        ],
      },
      {
        departmentName: "Civil Engineering",
        departmentManager: "Jameel Shami - 1584",
        allDoctors: [
          "Rami Mohammed - 1143",
          "Hamza Qasem - 1583",
          "Jameel Shami - 1584",
          "Abdallah Aws - 1585",
        ],
      },
      {
        departmentName: "Communications Engineering",
        departmentManager: "Ahmad Hawash - 1591",
        allDoctors: [
          "Islam Tamimi - 1590",
          "Ahmad Hawash - 1591",
          "Montaser Heron - 1592",
        ],
      },
      {
        departmentName: "Computer Engineering",
        departmentManager: "Manar Qamhieh - 1355",
        allDoctors: [
          "Abdallah Rashed - 1244",
          "Manar Qamhieh - 1355",
          "Haya Samaneh - 1366",
          "Raed Qadi - 1377",
          "Samer Arandi - 1495",
        ],
      },
      {
        departmentName: "Construction Engineering",
        departmentManager: "Salsabeel Basem - 1594",
        allDoctors: [
          "Basem Zitawi - 1593",
          "Salsabeel Basem - 1594",
          "Maher Amira - 1595",
        ],
      },
      {
        departmentName: "Electrical Engineering",
        departmentManager: "Aamer Tahan - 1551",
        allDoctors: [
          "Falah Eid - 1550",
          "Aamer Tahan - 1551",
          "Sameer Homsani - 1552",
        ],
      },
      {
        departmentName: "Industrial Engineering",
        departmentManager: "Sami Jaber - 1577",
        allDoctors: [
          "Sami Jaber - 1577",
          "Khaled Polas - 1578",
          "Mohammad Saeed - 1579",
        ],
      },
      {
        departmentName: "Mechanical Engineering",
        departmentManager: "Arzaq Haseba - 1587",
        allDoctors: [
          "Qamar Rami - 1586",
          "Arzaq Haseba - 1587",
          "Momen Bustami - 1588",
        ],
      },
    ]);

    return [
      {
        departmentName: "Architectural Engineering",
        departmentManager: "Mohammad Shatara - 1576",
        allDoctors: [
          "Mohammed Handai - 1574",
          "Tamer Mani - 1575",
          "Mohammad Shatara - 1576",
        ],
      },
      {
        departmentName: "Chemical Engineering",
        departmentManager: "Adam Atoot - 1581",
        allDoctors: [
          "Mahmoud Saad - 1142",
          "Rameh Radad - 1580",
          "Adam Atoot - 1581",
          "Ziad Melhem - 1582",
          "Ahmad Kaman - 1989",
        ],
      },
      {
        departmentName: "Civil Engineering",
        departmentManager: "Jameel Shami - 1584",
        allDoctors: [
          "Rami Mohammed - 1143",
          "Hamza Qasem - 1583",
          "Jameel Shami - 1584",
          "Abdallah Aws - 1585",
        ],
      },
      {
        departmentName: "Communications Engineering",
        departmentManager: "Ahmad Hawash - 1591",
        allDoctors: [
          "Islam Tamimi - 1590",
          "Ahmad Hawash - 1591",
          "Montaser Heron - 1592",
        ],
      },
      {
        departmentName: "Computer Engineering",
        departmentManager: "Haya Samaneh - 1366",
        allDoctors: [
          "Abdallah Rashed - 1244",
          "Manar Qamhieh - 1355",
          "Haya Samaneh - 1366",
          "Raed Qadi - 1377",
          "Samer Arandi - 1495",
        ],
      },
      {
        departmentName: "Construction Engineering",
        departmentManager: "Salsabeel Basem - 1594",
        allDoctors: [
          "Basem Zitawi - 1593",
          "Salsabeel Basem - 1594",
          "Maher Amira - 1595",
        ],
      },
      {
        departmentName: "Electrical Engineering",
        departmentManager: "Aamer Tahan - 1551",
        allDoctors: [
          "Falah Eid - 1550",
          "Aamer Tahan - 1551",
          "Sameer Homsani - 1552",
        ],
      },
      {
        departmentName: "Industrial Engineering",
        departmentManager: "Sami Jaber - 1577",
        allDoctors: [
          "Sami Jaber - 1577",
          "Khaled Polas - 1578",
          "Mohammad Saeed - 1579",
        ],
      },
      {
        departmentName: "Mechanical Engineering",
        departmentManager: "Arzaq Haseba - 1587",
        allDoctors: [
          "Qamar Rami - 1586",
          "Arzaq Haseba - 1587",
          "Momen Bustami - 1588",
        ],
      },
    ];
  } catch (error) {
    console.error("Error fetching all departments managers data:", error);
  }
};

export const updateDepartmentManager = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/chooseDepartmentManager/departmentManager`,
      body
    );
    const message = response.data.message;

    return message === "New manager updated successfully";
  } catch (error) {
    console.error("Error updating department manager:", error);
    return false;
  }
};
