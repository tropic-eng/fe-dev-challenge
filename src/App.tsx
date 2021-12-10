import React from "react";

import tropicTextLogo from "./tropic_logo.svg";

import Sider from "./sider";
import styles from "./app.module.scss";
import { Table } from "@chakra-ui/react";

import useFetchPurchases from "./queries/useFetchPurchases";

function App() {
  const { data: purchases, isLoading } = useFetchPurchases();

  console.log(purchases, isLoading);
  return (
    <section className={styles.layout}>
      <Sider>
        <img
          src={tropicTextLogo}
          alt="logo"
          style={{
            width: "150px",
            height: "36px",
            margin: "40px",
            display: "inline-block",
          }}
        />
      </Sider>
      <section className={styles.contentLayout}>
        <main className={styles.content}>
          <div style={{ background: "#F5F6FA", height: "100%" }}>
            {/* 
              Implement Table here
             */}
          </div>
        </main>
      </section>
    </section>
  );
}

export default App;
