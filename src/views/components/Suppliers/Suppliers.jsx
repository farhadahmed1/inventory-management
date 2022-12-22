import React, { useEffect } from "react";
import "./Suppliers.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplier } from "./../../../redux/slices/supplierSlice";
const Suppliers = () => {
  const supplier = useSelector((state) => state.supplierReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSupplier());
  }, []);
  // console.log(supplier.supplier.data);
  return (
    <>
      <div className="suppliersPages">
        <h2>Our Total Supplier {supplier?.supplier?.data?.length}</h2>
      </div>
      {supplier?.supplier?.data?.map((supplier) => (
        <>
          <div>
            <li> Name : {supplier?.name} </li>
            <li> Brand name : {supplier?.brand?.name}</li>
          </div>
        </>
      ))}
    </>
  );
};

export default Suppliers;
