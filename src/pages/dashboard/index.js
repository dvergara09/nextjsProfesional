import React, { useState } from 'react';

import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/';
import Chart from '@common/Chart';
import Pagination from '@components/Pagination';

const LIMIT = 5;

export default function Dashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);

  const products = useFetch(endPoints.products.getProducts(LIMIT, offsetProducts), offsetProducts);
  const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOcurrences = (array) => array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#23be5f', '#2a71d0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
