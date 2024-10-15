import Image from "next/image";
import styles from "./page.module.css";
import { Gallery } from "@/components/Gallery/gallery";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Image Gallery</h1>
      <Gallery />
    </main>
  );
}
