"use client";

import HomeContent from "@/components/HomeContent";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

/////****
// Even though you wrote "use client", the Next.js App Router (app directory) still initially renders pages on the server, then hydrates them on the client.
// The problem is:
// useAccount() from wagmi might return different values on the server vs. on the client.
// 	•	On the server, wallet connection status (isConnected) is usually false, since wallets only exist in the browser.
// 	•	On the client, it updates to true if a wallet is connected.
//  */

export default function Home() {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures this runs only on client
  }, []);

  if (!mounted) return null; // or a loader
  return (
    <div>
      {isConnected ? (
        <div>
          {" "}
          <HomeContent />
        </div>
      ) : (
        <div>Please Connect a wallet...</div>
      )}
    </div>
  );
}
