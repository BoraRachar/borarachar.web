let storedEmail: string | null = null;

export function setEmail(email: string) {
  storedEmail = email;
}

export function getEmail() {
  return storedEmail;
}