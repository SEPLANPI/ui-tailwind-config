import type { Config } from "tailwindcss"

declare module "@ui/tailwind-config" {
  const theme: Config
  export default theme
}
