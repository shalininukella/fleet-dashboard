import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const fetchOverview = () => axios.get(`${BASE_URL}/overview`);

export const fetchUsageStats = (days?: number) =>
    axios.get(`${BASE_URL}/usageStats`, {
      params: { days },
    });
  
  
