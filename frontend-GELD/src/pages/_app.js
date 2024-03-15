import "@/styles/globals.css";
import { SignUpAllData } from "../context/signupContext";
export default function App({ Component, pageProps }) {
  return (
    <SignUpAllData>
      <Component {...pageProps} />;
    </SignUpAllData>
  );
}
