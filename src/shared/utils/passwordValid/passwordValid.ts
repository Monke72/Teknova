export function passwordValid(pass: string): boolean {
  return pass.length > 8 && /\d/.test(pass) && /[A-Z]/.test(pass);
}
