import BookPage from '@/components/pages/BookPage';

export default function page({ book }) {
  return (
    <BookPage currentBook={book} />
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://book-db-1.onrender.com/books');
  const id = await res.json();

  const paths = id.map((i) => ({
    params: { id: i.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://book-db-1.onrender.com/books/${params.id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const book = await res.json();

    return {
      props: { book },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
