import { useState } from "react";
import Splash from "./views/Splash";
import Login from "./views/Login";

export default function App() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <Splash onComplete={() => setReady(true)} />;
  }

  return <Login />;
}
