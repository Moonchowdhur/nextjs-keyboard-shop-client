"use client";
import { FaPen } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Link from "next/link";
import swal from "sweetalert";

const ProductCard = ({ item, fetchProduct }: any) => {
  const { title, price, image, _id, brand } = item;

  const handleDelete = async (id: string) => {
    console.log(id, "id");
    try {
      // Show the confirmation dialog
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product data!",
        icon: "warning",
            // @ts-expect-error: Unreachable code error
        buttons: true,
        dangerMode: true,
      });

      // If the user confirms deletion
      if (willDelete) {
        const response = await fetch(
          `https://redux-first-assignment.vercel.app/api/v1/product/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          swal("Product has been deleted!", {
            icon: "success",
          });
          await fetchProduct();
          // setProducts(products.filter(product => product._id !== id));
        } else {
          throw new Error("Failed to delete the product");
        }
      } else {
        swal("Product is safe!");
      }
    } catch (error) {
      swal("Error!", "There was a problem deleting the product.", "error");
    }
  };
  console.log(item);
  return (
    <tr>
      <td className="font-normal ">{title}</td>
      <td className="">
        <img src={image} className=" rounded-full h-12 w-12" />
      </td>
      <td className="">{brand}</td>
      <td className="">{price}</td>
      <td className="flex items-center mt-2 gap-2 ">
        <Link href={`/products/updateProduct/${_id}`}>
          <FaPen className="text-2xl text-[#4A249D]" />
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <MdAutoDelete className="text-2xl text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
