import axios from "axios";
const apiUrl = import.meta.env.VITE_API_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_API_KEY;

const StringapiUrl = apiUrl.toString();
const StringapiKey = apiKey.toString();
axios.defaults.withCredentials = true;

console.log(StringapiUrl, StringapiKey);

// get all staff
export const all_staff = async () => {
  try {
    const response = await axios.get(`${StringapiUrl}staff/get_staffs`, {
      headers: {
        "x-api-key": `${StringapiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get event
export const get_an_event = async (eventId: string) => {
  try {
    const response = await axios.get(
      `${StringapiUrl}event/get_event/${eventId}`,
      {
        headers: {
          "x-api-key": `${StringapiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const get_staff = async (staffId: string | boolean | undefined) => {
  try {
    const response = await axios.get(
      `${StringapiUrl}staff/get_a_staff/${staffId}`,
      {
        headers: {
          "x-api-key": `${StringapiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all event
export const get_all_event = async () => {
  try {
    const response = await axios.get(`${StringapiUrl}event/get_all_event`, {
      headers: {
        "x-api-key": `${StringapiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all Blog
export const get_blogs = async () => {
  try {
    const response = await axios.get(`${StringapiUrl}blog/get_blogs`, {
      headers: {
        "x-api-key": `${StringapiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get a single Blog
export const get_a_blog = async (blogId: string | undefined) => {
  try {
    const response = await axios.get(`${StringapiUrl}blog/get_blog/${blogId}`, {
      headers: {
        "x-api-key": `${StringapiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get a single Blog
export const contact_us = async (data: object) => {
  try {
    const response = await axios.post(`${StringapiUrl}auth/contact_us`, data, {
      headers: {
        "x-api-key": `${StringapiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const get_pdf = async (fileName: string) => {
  try {
    const response = await axios.get(
      `${StringapiUrl}event/check_pdf/${fileName}`,
      {
        headers: {
          "x-api-key": `${StringapiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const download_calendar = async (fileName: string) => {
  try {
    const response = await axios.get(
      `${StringapiUrl}event/download_calendar/${fileName}`,
      {
        headers: {
          "x-api-key": `${StringapiKey}`,
        },
        responseType: "blob",
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
