export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const FOTO_POST = (formData, token) => {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
};

export const FOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const FOTOSINGLE_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
};

export const FOTO_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const COMMENT_POST = (id, body) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
};

export const FOTO_DELETE = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
};

export const PASSWORD_LOST = (body) => {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = (body) => {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};
