export type FieldType = {
  username: string;
  email: string;
  message: string;
};

export const fetchData = async (inputData: FieldType) => {
  try {
    const response = await fetch("http://193.227.240.131:3535/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { message: string } = await response.json();

    if (typeof data.message !== "string") {
      throw new Error(`Not valid data!`);
    }

    return data.message;
  } catch (error) {
    console.log(error);
  }
};
