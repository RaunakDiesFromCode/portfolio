import { Shadows_Into_Light, Fira_Code, Poppins} from 'next/font/google'



export const highlightFont = Poppins({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
});

export const heroFont = Shadows_Into_Light({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
})

export const codeFont = Fira_Code({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
})