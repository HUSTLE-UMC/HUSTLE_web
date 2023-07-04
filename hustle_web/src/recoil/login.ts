import { atom, selector } from "recoil";

const userState = atom({
    key: "userState",
    default: {
        name: "",
        jwt: "",
    },
});

export const nameState = selector({
    key: "nameState",
    get: ({ get }) => get(userState).name,
    set: ({ get, set }, name) => set(userState, { ...get(userState), name }),
});

export const jwtState = selector({
    key: "jwtState",
    get: ({ get }) => get(userState).jwt,
    set: ({ get, set }, jwt) => set(userState, { ...get(userState), jwt }),
});
