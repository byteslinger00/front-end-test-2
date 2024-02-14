import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ContainerLayout from "@/components/Layouts/ContainerLayout";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Statistic from "@/components/Statistic";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Front End Test 2</title>
        <meta name="description" content="Front-End-Test-2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ContainerLayout>
          <Sidebar />
          <Dashboard />
          <Statistic />
        </ContainerLayout>
      </main>
    </>
  );
}
