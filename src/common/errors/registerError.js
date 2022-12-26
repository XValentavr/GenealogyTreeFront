export const RegisterError = error => {
  if (error.email) {
    return 'Користувач з такою поштою існує'
  }
}