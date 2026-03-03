import { CUSTOMERS } from './data.js';

let _current = null;

// TODO: replace with API call to /api/auth/login
export function login(email, password) {
  const record = CUSTOMERS[email];
  if (!record || record.password !== password) return false;
  _current = { email, ...record };
  return true;
}

// TODO: replace with API call to /api/auth/session
export function loadSession(email) {
  const record = CUSTOMERS[email];
  if (!record) return false;
  _current = { email, ...record };
  return true;
}

export function logout() {
  _current = null;
}

export function getCurrentCustomer() {
  return _current;
}
