import UseFetch from ".";

const UseFetchHookTest = () => {
  const { data, error, pending } = UseFetch(
    `https://dummyjson.com/products?`,
    {}
  );

  console.log(data, error, pending);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending! Please wait</h3> : null}
      {error ? <h3>Error!</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productsItem) => (
            <p key={productsItem.key}>{productsItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
