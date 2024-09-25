import { writable } from 'svelte/store';

function createUserStore() {
  const { subscribe, set, update } = writable({
    isLoggedIn: false,
    user: null
  });

  return {
    subscribe,
    login: (user) => update(state => ({ ...state, isLoggedIn: true, user })),
    logout: () => set({ isLoggedIn: false, user: null }),
    updateUser: (userData) => update(state => ({ ...state, user: { ...state.user, ...userData } }))
  };
}