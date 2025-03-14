"use client";

import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Error Handling Example</title>
        <meta name="description" content="Test error handling for your Next.js app!" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "14px 0" }}>Error Handling Example</h1>

        <p>Click the button below to trigger an error:</p>
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
          onClick={() => {
            try {
              throw new Error("Example Frontend Error");
            } catch (error) {
              console.error("Caught an error:", error);
            }
          }}
        >
          Throw error!
        </button>

        <p style={{ marginTop: "24px" }}>
          For more information, see{" "}
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Next.js Documentation
          </a>
        </p>
      </main>
    </div>
  );
}
