import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create(
    persist(
        (set) => ({
            user : null,
            isLogin : false,
            setUser: (userData) => set({ user: userData, isLogin: true }),
            logout : () => set({ user: null, isLogin: false }),
        }),
        {
            name: 'user-storage', // 로컬스토리지에 저장될 키 이름
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useUserStore;