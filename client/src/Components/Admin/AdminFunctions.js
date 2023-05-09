import { Data } from "./Data";
// array of object
const EmployeeData = Data;
export function Generate_row() {
  const table = document.getElementById("html-data-table");
  EmployeeData.map((items) => {
    if (items > 0) {
      for (let j = 0; j < items.length; j++) {
        const IdField = document.createElement("td");
        IdField.textContent = `${items.id}`;
        const NameField = document.createElement("td");
        NameField.textContent = `${items.name}`;
        const PositionField = document.createElement("td");
        PositionField.textContent = `${items.position}`;
        const StatusField = document.createElement("td");
        StatusField.textContent = `${items.status}`;

        const row = document.createElement("tr");

        row.append(IdField);
        row.append(NameField);
        row.append(PositionField);
        row.append(StatusField);
        table.append(row);
      }
      return console.log(items.id[0]);
    }
  });
}

Generate_row();
