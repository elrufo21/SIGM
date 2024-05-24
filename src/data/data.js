export const EmployeesList = [
  {
    id: 1,
    names: "Ruben",
    surnames: "Vasquez",
    rol: "Developer",
    phone: "987292296",
    status: "0",
  },
  {
    id: 2,
    names: "Dario",
    surnames: "Porras",
    rol: "Tester",
    phone: "987292297",
    status: "1",
  },
  {
    id: 3,
    names: "Russ",
    surnames: "Paucar",
    rol: "UX/UI",
    phone: "987292298",
    status: "1",
  },
  {
    id: 4,
    names: "Mery",
    surnames: "Benites",
    rol: "Developer",
    phone: "987292296",
    status: "0",
  },
  {
    id: 5,
    names: "Jose",
    surnames: "Grimaldo",
    rol: "Mecanico",
    phone: "987212296",
    status: "1",
  },
  {
    id: 6,
    names: "Test",
    surnames: "testing",
    rol: "Mecanico",
    phone: "987292296",
    status: "0",
  },
  {
    id: 7,
    names: "Pedro",
    surnames: "Castillo",
    rol: "Practicante",
    phone: "123456789",
    status: "1",
  },
];

export const ToolsList = [
  {
    id: 1,
    name: "Alicate",
    status: "1",
    description: "Caja c21 marron",
    reguistration_date: "2022-01-01",
  },
  {
    id: 2,
    name: "Gata",
    status: "2",
    description: "Debajo del auto",
    reguistration_date: "2022-01-11",
  },
  {
    id: 3,
    name: "Destornillador estrella",
    status: "1",
    description: "Caja c21 marron",
    reguistration_date: "2022-01-01",
  },
  {
    id: 4,
    name: "Alicate de corte",
    status: "1",
    description: "Caja c21 marron",
    reguistration_date: "2022-01-01",
  },
  {
    id: 5,
    name: "Lija 3cm",
    status: "2",
    description: "Caja c21 marron",
    reguistration_date: "2022-01-01",
  },
  {
    id: 6,
    name: "Llave craishon",
    status: "1",
    description: "Caja c21 marron",
    reguistration_date: "2022-01-01",
  },
];

export const SparePartsList = [
  {
    id: 1,
    name: "Filtro de aire",
    stock: "10",
    type: "Filtros",
    description: "",
  },
  {
    id: 2,
    name: "Filtro de gasolina",
    stock: "10",
    type: "filtros",
    description: "",
  },
  {
    id: 3,
    name: "Pastilla de freno",
    stock: "5",
    type: "frenos",
    description: "",
  },
  {
    id: 4,
    name: "Filtro de aire",
    stock: "10",
    type: "Filtros",
    description: "",
  },
  {
    id: 5,
    name: "Filtro de aire",
    stock: "10",
    type: "Filtros",
    description: "",
  },
];
export const ticketsList = [
  {
    id: 1,
    description: "Revisión de motor",
    status: "O",
    registration_date: "2024-05-16T12:00:00Z",
    actualization_date: "2024-05-16T12:00:00Z",
    employees: [
      {
        id: 1,
        names: "Ruben",
        surnames: "Vasquez",
        rol: "Developer",
        phone: "987292296",
        status: "0",
      },
      {
        id: 2,
        names: "Dario",
        surnames: "Porras",
        rol: "Tester",
        phone: "987292297",
        status: "1",
      },
    ],
    tools: [
      {
        id: 1,
        name: "Alicate",
        status: "1",
        description: "Caja c21 marron",
        registration_date: "2022-01-01",
      },
      {
        id: 2,
        name: "Gata",
        status: "2",
        description: "Debajo del auto",
        registration_date: "2022-01-11",
      },
    ],
    spare_parts: [
      {
        id: 1,
        name: "Filtro de aire",
        stock: "10",
        type: "Filtros",
        description: "",
      },
      {
        id: 3,
        name: "Pastilla de freno",
        stock: "5",
        type: "Pastillas de frenos",
        description: "",
      },
    ],
  },
  {
    id: 2,
    description: "Cambio de aceite",
    status: "C",
    registration_date: "2024-05-16T12:00:00Z",
    actualization_date: "2024-05-16T12:00:00Z",
    employees: [
      {
        id: 3,
        names: "Russ",
        surnames: "Paucar",
        rol: "UX/UI",
        phone: "987292298",
        status: "1",
      },
      {
        id: 4,
        names: "Mery",
        surnames: "Benites",
        rol: "Developer",
        phone: "987292296",
        status: "0",
      },
    ],
    tools: [
      {
        id: 3,
        name: "Destornillador estrella",
        status: "1",
        description: "Caja c21 marron",
        registration_date: "2022-01-01",
      },
      {
        id: 4,
        name: "Alicate de corte",
        status: "1",
        description: "Caja c21 marron",
        registration_date: "2022-01-01",
      },
    ],
    spare_parts: [
      {
        id: 2,
        name: "Filtro de gasolina",
        stock: "10",
        type: "Filtros",
        description: "",
      },
      {
        id: 4,
        name: "Filtro de aire",
        stock: "10",
        type: "Filtros",
        description: "",
      },
    ],
  },
  {
    id: 3,
    description: "Reparación de frenos",
    status: "O",
    registration_date: "2024-05-16T12:00:00Z",
    actualization_date: "2024-05-16T12:00:00Z",
    employees: [
      {
        id: 5,
        names: "Jose",
        surnames: "Grimaldo",
        rol: "Mecanico",
        phone: "987212296",
        status: "1",
      },
      {
        id: 6,
        names: "Test",
        surnames: "testing",
        rol: "Mecanico",
        phone: "987292296",
        status: "0",
      },
    ],
    tools: [
      {
        id: 5,
        name: "Lija 3cm",
        status: "2",
        description: "Caja c21 marron",
        registration_date: "2022-01-01",
      },
      {
        id: 6,
        name: "Llave craishon",
        status: "1",
        description: "Caja c21 marron",
        registration_date: "2022-01-01",
      },
    ],
    spare_parts: [
      {
        id: 5,
        name: "Filtro de aire",
        stock: "10",
        type: "Filtros",
        description: "",
      },
    ],
  },
];
const vE = "#05FF00";

dataCreateTicket = {
  description: "Reparación de frenos",
  status: "Pendiente",
  cost: 250.0,
  employees: [1, 2], // ID de los empleados asignados al ticket
  spare_parts: [
    { id: 2, quantity: 4 }, // ID de la pieza de repuesto y cantidad utilizada
    { id: 3, quantity: 2 },
  ],
  tools: [1, 3], // ID de las herramientas utilizadas en el ticket
};
