import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/actions/product/productActions';
import Table from '../comman/Table';
import Swal from 'sweetalert2'


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [filterText, setFilterText] = useState("");
  
  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedProducts, setSelectedProducts] = useState([]);


  const handleCheckboxChange = ({selectedRows}) => {
    setSelectedProducts(selectedRows)
  }


  const handleDeleteSelected = () => {
    // Dispatch action to delete selected products
    // if (window.confirm('Are you sure you want to delete the selected products?')) {

    Swal.fire({
      title: "Do you want to delete the selected product?",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        selectedProducts.forEach((product) => {
          dispatch(deleteProduct(product.id));
        });
        Swal.fire("Product deleted!...", "", "success");
      } 
    });
    setSelectedProducts([]);
  };

  const handleDelete = (product) => {
    Swal.fire({
      title: "Do you want to delete the product?",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product.id));
        Swal.fire("Product deleted!...", "", "success");
      } 
    });
  }

  const productColumnsList = [
    {
      name: 'Name',
      selector: (row) => row['name'],
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row['category'],
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row['description'],
    },
    {
      name: 'Expiry Date',
      selector: (row) => row['expiryDate'],
      sortable: true,
    },
    {
      name: 'Cost Price',
      selector: (row) => row['costPrice'],
      sortable: true,
    },
    {
      name: 'Sell Price',
      selector: (row) => row['sellPrice'],
      sortable: true,
    },
    {
      name: 'Discount',
      selector: (row) => row['discountPercentage'],
      sortable: true,
    },
    {
      name: 'Discounted Sell Price',
      selector: (row) => row.sellPrice - (row.sellPrice * row.discountPercentage) / 100,
      sortable: true,
    },
    {
      name: 'Final Price',
      selector: (row) => row.sellPrice - (row.sellPrice * row.discountPercentage) / 100,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => <button className="bg-red-300 p-2 rounded" onClick={() => handleDelete(row)}>Delete</button>,
    },
    ];
    
  // const FilteredData = products.list.filter(
  //   item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // )

  const FilteredData = products.list.filter(item => {
    const filterLowerCase = filterText.toLowerCase();

    return (
      (item.name && item.name.toLowerCase().includes(filterLowerCase)) ||
      (item.category && item.category.toLowerCase().includes(filterLowerCase)) ||
      (item.description && item.description.toLowerCase().includes(filterLowerCase)) ||
      (item.expiryDate && item.expiryDate.toLowerCase().includes(filterLowerCase)) ||
      (item.costPrice && String(item.costPrice).toLowerCase().includes(filterLowerCase)) ||
      (item.sellPrice && String(item.sellPrice).toLowerCase().includes(filterLowerCase)) ||
      (item.discountPercentage && String(item.discountPercentage).toLowerCase().includes(filterLowerCase))
    );
  });

  return (
    <div className='mx-4 bg-white rounded shadow-xl overflow-auto'>
        <h3 className='py-6 text-center text-2xl font-semibold underline'>Product List</h3>

          <div className='flex justify-end pr-10'>
            <input type="text" className='bg-gray-100 rounded py-2 px-5' placeholder='Search' onChange={(e) => setFilterText(e.target.value)}/>
          </div>

        <div>
          <div>
          {selectedProducts.length !== 0 && <div className='m-4 flex justify-end'>
              <button
                onClick={handleDeleteSelected}
                className='bg-red-500 text-white p-1 rounded-md'
              >
                Delete Selected
              </button>
            </div>}
          </div>
          <Table columns={productColumnsList} data={FilteredData} handleCheckboxChange={handleCheckboxChange}/>
        </div>


    </div>
  );
};

export default ProductList;
