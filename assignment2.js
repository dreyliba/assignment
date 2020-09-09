const products = [
    {
      id: 1,
      name: 'Lenovo Phone',
      price: 10400,
    },
    {
      id: 2,
      name: 'Iphone X',
      price: 74300,
    },
    {
      id: 3,
      name: 'Mouse',
      price: 800,
    },
    {
      id: 4,
      name: 'keyboard',
      price: 18000,
    },
    {
      id: 5,
      name: 'Sony Headset',
      price: 19500,
    },
    {
      id: 6,
      name: 'Acer Laptop',
      price: 25400,
    },
  ];
  
  const reservedProducts = [
    {
      id: 2,
      name: 'Iphone X',
      price: 74300,
    },
    {
      id: 5,
      name: 'Sony Headset',
      price: 19500,
    },
  ];
  
  const reservedProd = reservedProducts.map((prod) => prod.name);
  
  const prodList = products.filter((prod) => reservedProd.includes(prod.name)
  );
  
  console.log(prodList);