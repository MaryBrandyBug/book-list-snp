import BookPage from '@/components/pages/BookPage';

export default function page() {
  return (
    <BookPage />
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:8000/books');
  const id = await res.json();

  const paths = id.map((i) => ({
    params: { id: i.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:8000/books/${params.id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const id = await res.json();

    return {
      props: {
        id,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
}
