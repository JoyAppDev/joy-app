import { API_URL } from '../utils/constants';
import { api } from '../utils/api-requests';

const getContent = async id => {
  const response = await api.get(`${API_URL}/api/api/creators/${id}/licenses/`);
  return response.data;
};

const creativeService = {
  getContent,
};

export default creativeService;
