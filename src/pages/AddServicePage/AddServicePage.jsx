import { useState } from "react";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import Swal from "sweetalert2";

const AddServicePage = () => {
  const [formData, setFormData] = useState({ facilities: [] });

  const facilitiesData = [
    { name: "Facility Name 1", details: "Facility Details 1" },
    { name: "Facility Name 2", details: "Facility Details 2" },
    { name: "Facility Name 3", details: "Facility Details 3" },
    { name: "Facility Name 4", details: "Facility Details 4" },
  ];

  const handleFacilityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFacilities = [...formData.facilities];
    // Make sure `updatedFacilities[index]` exists
    if (!updatedFacilities[index]) {
      updatedFacilities[index] = {};
    }
    updatedFacilities[index][name] = value;
    setFormData({ facilities: updatedFacilities });
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const service_id = form.service_id.value;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const newService = {
      service_id,
      title,
      img,
      price,
      description,
      facilities: formData.facilities,
    };
    console.log(newService);

    // send data to server
    try {
      const response = await fetch("http://localhost:5000/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      });
      const result = await response.json();
      console.log(result);
      if (result.status.includes("Added")) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "New service added successfully",
          confirmButtonText: "Cool",
        });
        form.reset();
      } else if (result.status.includes("Already exists in DB")) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate!",
          text: "Service exists already",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <section>
      <SmallBanner path={"Home/Service"}>Add New Service</SmallBanner>
      <div className="bg-foot-anchor mt-24 md:mt-32 lg:mt-36 xl:mt-40 px-5 md:px-12 lg:px-20 py-20 rounded-xl">
        <form onSubmit={handleAddService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Service Id</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="service_id"
                id=""
                placeholder="Service Id"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Title</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="title"
                id=""
                placeholder="Service Name"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Image</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="url"
                name="img"
                id=""
                placeholder="Service Image URL"
                required
              />
            </span>
            <span className="space-y-4">
              <p className="text-sub-head text-lg font-semibold">Price</p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="text"
                name="price"
                id=""
                placeholder="Service Price"
                required
              />
            </span>
            <span className="space-y-4 md:col-span-2">
              <p className="text-sub-head text-lg font-semibold">Description</p>
              <textarea
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="Service Description"
                required
              ></textarea>
            </span>
            {/* facility */}
            {facilitiesData.map((facility, index) => (
              <>
                <span className="space-y-4">
                  <p className="text-sub-head text-lg font-semibold">
                    {facility.name}
                  </p>
                  <input
                    className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                    type="text"
                    name="name"
                    onChange={(e) => handleFacilityChange(index, e)}
                    placeholder="Facility Name"
                    required
                  />
                </span>
                <span className="space-y-4">
                  <p className="text-sub-head text-lg font-semibold">
                    {facility.details}
                  </p>
                  <input
                    className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                    type="text"
                    name="details"
                    onChange={(e) => handleFacilityChange(index, e)}
                    placeholder="Facility Details"
                    required
                  />
                </span>
              </>
            ))}
            <span className="md:col-span-2">
              <button className="bg-special text-white text-xl font-semibold py-4 w-full rounded-lg">
                <input type="submit" value="Add Service" />
              </button>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddServicePage;
