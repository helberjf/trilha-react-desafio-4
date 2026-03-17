import { AuthCredentials, AuthenticatedUser } from "../../types/auth";

interface MockUserRecord extends AuthenticatedUser {
  password: string;
}

class InvalidCredentialsError extends Error {
  constructor() {
    super("INVALID_CREDENTIALS");
    this.name = "InvalidCredentialsError";
  }
}

const STORAGE_KEY = "@trilha-react-desafio-4:user";
const REQUEST_DELAY_MS = process.env.NODE_ENV === "test" ? 0 : 450;

const MOCK_USERS: MockUserRecord[] = [
  {
    id: "usr_001",
    name: "Helber Junior",
    email: "admin@dio.com",
    password: "123456",
    role: "Frontend Engineer",
  },
];

export const AUTH_TEST_CREDENTIALS: AuthCredentials = {
  email: "admin@dio.com",
  password: "123456",
};

function wait(delay: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isAuthenticatedUser(value: unknown): value is AuthenticatedUser {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<AuthenticatedUser>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.name === "string" &&
    typeof candidate.email === "string" &&
    typeof candidate.role === "string"
  );
}

async function login(credentials: AuthCredentials): Promise<AuthenticatedUser> {
  await wait(REQUEST_DELAY_MS);

  const matchedUser = MOCK_USERS.find((user) => {
    return (
      normalizeEmail(user.email) === normalizeEmail(credentials.email) &&
      user.password === credentials.password.trim()
    );
  });

  if (!matchedUser) {
    throw new InvalidCredentialsError();
  }

  const { password, ...safeUser } = matchedUser;

  return safeUser;
}

function getStoredUser(): AuthenticatedUser | null {
  const storedUser = window.localStorage.getItem(STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    const parsedUser: unknown = JSON.parse(storedUser);

    if (!isAuthenticatedUser(parsedUser)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsedUser;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function persistUser(user: AuthenticatedUser) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function clearStoredUser() {
  window.localStorage.removeItem(STORAGE_KEY);
}

function isInvalidCredentialsError(error: unknown) {
  return error instanceof InvalidCredentialsError;
}

export const authService = {
  login,
  getStoredUser,
  persistUser,
  clearStoredUser,
  isInvalidCredentialsError,
};
