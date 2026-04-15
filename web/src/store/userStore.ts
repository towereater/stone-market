import { createStore } from "solid-js/store";

interface UserState {
  name: string | null;
  email: string | null;
}

const [user, setUser] = createStore<UserState>({
  name: null,
  email: null,
});

export { user, setUser };
