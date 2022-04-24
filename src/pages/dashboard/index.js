import { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endpoints from '@services/api';

import { Chart } from '@common/Chart';

const LIMIT = 5;
const OFFSET = 5;

import { usePagination } from '@hooks/usePagination';

import Paginator from '@components/Pagination';

export default function Dashboard() {
  const [productOffset, setProductOffset] = useState(1);
  const totalItems = useFetch(endpoints.products.getProducts(0, 0));
  const pagination = usePagination(LIMIT, totalItems.length, 3);
  const products = useFetch(endpoints.products.getProducts(LIMIT, productOffset));

  const handlePagination = (event) => {
    event.preventDefault();
    let current = event.target.getAttribute('data-page');
    if (current == null) {
      current = event.target.parentNode.getAttribute('data-page');
      if (current == null) {
        current = event.target.parentNode.parentNode.getAttribute('data-page');
      }
    }
    pagination.setCurrentPage(Number(current));
    setProductOffset((Number(current) - 1) * PRODUCT_LIMIT);
  };

  const categoryName = products?.map((product) => product.category);
  const categoryCount = categoryName?.map((category) => category.name);

  const countOCurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOCurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
