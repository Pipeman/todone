export const mutations = {
  addTask ({ tasks }, newTask) {
    tasks.push(newTask);
  },
};
export const actions = {
  addTask ({ commit }, newTask) {
    commit(newTask);
  },
};

export default {
  namespaced: true,
  state: {
    tasks: [],
  },
  mutations,
  actions,
};
