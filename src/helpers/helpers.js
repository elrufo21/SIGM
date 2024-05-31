import axios from "axios";

export const getEmployeeById = (id) => {
  return employees.find((employee) => employee.id === id);
};
export const getDataById = (data, id) => {
  return data.find((d) => d.id === id);
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.toJSON());
  }
};

export const updateData = async (url, updatedData) => {
  try {
    const response = await axios.put(url, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos PUT:", error);
  }
};

export const createData = async (url, newData) => {
  try {
    const response = await axios.post(url, newData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos POST:", error);
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos DELETE:", error);
  }
};
export const updateFinishTicket = async (url) => {
  try {
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos PUT:", error);
  }
};

export const logginUser = async (url,user) => {
  try {
    const response = await axios.post(url,user);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos POST:", error);
  }
};
