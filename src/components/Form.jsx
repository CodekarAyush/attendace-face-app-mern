import  { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:8080/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg"
    >
      <h2 className="text-white text-3xl font-semibold mb-6 text-center">Admin Upload Form</h2>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2" htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-400"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2" htmlFor="designation">Designation:</label>
        <input
          id="designation"
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          className="w-full p-3 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-800 placeholder-gray-400"
          placeholder="Enter designation"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2" htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
          className="w-full p-3 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-electric-blue text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none text-lg font-semibold"
      >
        Upload
      </button>
    </form>
  );
};

export default Form;
