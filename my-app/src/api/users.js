

const API_BASE_URL = "https://disc-assignment-5-users-api.onrender.com";

export const getAllUsers = async () => {
    const response = await fetch (`${API_BASE_URL}/api/users`);
    if (!response.ok) throw new Error ("Failed ot fetch users");
    return response.json();
}

export const getUserByID = async (id) =>{
    const response = await fetch(`${API_BASE_URL}/api/users/${id}`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
}


export const createUser = async (formData)=> {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: "POST",
        body: formData,
    });
    if (!response.ok) throw new Error("Failed to create user");
    return response.json();
};


export const updateUser = async({id, formData})=> {
    const response = await fetch (`${API_BASE_URL}/api/users/${id}`,{
        method: "PUT",
        body: formData,

    });
    if (!response.ok) throw new Error("Failed to update user");
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch (`${API_BASE_URL}/${id}`,{
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
}












