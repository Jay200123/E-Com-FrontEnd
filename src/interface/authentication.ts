import { User } from "./user";

interface AuthenticationState {
  user: User | null;
  isAuthorized: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
}

export type { AuthenticationState };
