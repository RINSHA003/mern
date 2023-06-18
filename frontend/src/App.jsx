import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = async (data) => {
    setData(data);
    console.log(data);
    await sendData(data);
  };

  const sendData = async (data) => {
    try {
      const send = await axios.post("http://localhost:4578/addData", data);
      console.log(send);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center mt-3">
        Data Insert from frontend to MongoDB through backend
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input id="title" placeholder="Title" {...register("title")} />

        <label htmlFor="price">Price</label>
        <input id="price" placeholder="Price" {...register("price")} />

        <label htmlFor="image">Image</label>
        <input
          id="image"
          placeholder="Image"
          {...register("image")}
          onChange={handleImageChange}
        />

        {imageUrl && ( // Check if imageUrl is not empty
          <img src={imageUrl} alt="Product" style={{ width: "200px" }} />
        )}

        <button
          className="flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900 text-white hover:bg-gray-800"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
