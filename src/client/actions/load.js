export const ADD_LOADING = 'currentLoad/addLoading';
export const DEL_LOADING = 'currentLoad/delLoading';

export const addLoading = () => ({
  type: ADD_LOADING,
});

export const delLoading = () => ({
  type: DEL_LOADING,
});

export default {
  addLoading,
  delLoading,
};
