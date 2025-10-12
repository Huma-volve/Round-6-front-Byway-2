import axios from "axios";

export async function getRevenue() {
    const response = await axios.get('/api/instructor/revenue',{
        headers:{
            Authorization: "Bearer 1|j3IPuNDhhGpW1bRefkRYzZW9oQXhDwg2gyocyDuF1ae5f0a3"
        }
    });
    const data = await response.data;
    return data;
}
