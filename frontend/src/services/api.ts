import axios from "axios";
const BASE_URL = "https://fleet-dashboard-l1ag.onrender.com";

export const fetchOverview = () => axios.get(`${BASE_URL}/overview`);

export const fetchUsageStats = (days?: number) =>
    axios.get(`${BASE_URL}/usageStats`, {
      params: { days },
    });
  
  
