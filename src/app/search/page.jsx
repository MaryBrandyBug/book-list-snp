'use client';

import { useSearchParams } from 'next/navigation';

function SearchPage() {
  const search = useSearchParams();
  return <div>search page</div>;
}

export default SearchPage;
