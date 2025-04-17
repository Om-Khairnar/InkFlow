import CardList from "@/components/cardList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/Menu/Menu"
import { Metadata } from 'next'

interface SearchParams {
  page?: string
  cat?: string
}

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'Blog posts and articles',
}

export default async function BlogPage({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const page = parseInt(searchParams.page ?? "1");
  const cat = searchParams.cat ?? "All";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu />
      </div>
    </div>
  );
}