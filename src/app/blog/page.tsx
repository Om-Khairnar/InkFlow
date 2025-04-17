import CardList from "@/components/cardList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/Menu/Menu"

interface BlogPageProps {
  searchParams: {
    page?: string;
    cat?: string;
  }
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
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
};

export default BlogPage;