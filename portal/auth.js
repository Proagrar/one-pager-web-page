// TODO: replace with API call to /api/auth/login once backend exists
import { supabase } from './data.js';

let _current = null;

// Returns the customer object on success, null on failure
export async function login(email, password) {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('email', email)
    .eq('portal_password', password)
    .maybeSingle();

  if (error || !data) return null;
  _current = data;
  return data;
}

// Restore session by customer id (stored in URL hash after login)
// TODO: replace with API call to /api/auth/session
export async function loadSession(customerId) {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('id', customerId)
    .maybeSingle();

  if (error || !data) return null;
  _current = data;
  return data;
}

export function logout() {
  _current = null;
}

export function getCurrentCustomer() {
  return _current;
}
