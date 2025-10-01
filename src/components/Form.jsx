import React, { useState } from "react";
import axios from "axios";

export default function ProjectForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    projectName: "",
    jurisdiction: "",
    routeNumber: "",
    streetName: "",
    from: "",
    to: "",
    description: "",
    upc: "",
    funding: { cmaq: false, cr: false, stbg: false },
    submittedBefore: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field when it changes
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      funding: { ...prev.funding, [name]: checked }, // Clear funding error when any checkbox changes
    }));
    setErrors((prev) => ({ ...prev, funding: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.projectName)
      newErrors.projectName = "Project Name is required";
    if (!formData.jurisdiction)
      newErrors.jurisdiction = "Jurisdiction is required";
    if (!formData.routeNumber)
      newErrors.routeNumber = "Route Number is required";
    if (!formData.streetName) newErrors.streetName = "Street Name is required";
    if (!formData.from) newErrors.from = "Project Termini 'From' is required";
    if (!formData.to) newErrors.to = "Project Termini 'To' is required";
    if (!formData.description)
      newErrors.description = "Project Description is required";
    if (
      !formData.funding.cmaq &&
      !formData.funding.cr &&
      !formData.funding.stbg
    ) {
      newErrors.funding = "At least one funding option must be selected";
    }
    if (!formData.submittedBefore)
      newErrors.submittedBefore = "Previous submission status is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://backend.com.render/api/projects",
        formData
      );
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div
      id="form"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
    >
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Application Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700"
              >
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errors.projectName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="jurisdiction"
                className="block text-sm font-medium text-gray-700"
              >
                Jurisdiction <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jurisdiction"
                id="jurisdiction"
                value={formData.jurisdiction}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errors.jurisdiction && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.jurisdiction}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="routeNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Route Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="routeNumber"
                id="routeNumber"
                value={formData.routeNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errors.routeNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.routeNumber}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="streetName"
                className="block text-sm font-medium text-gray-700"
              >
                Street Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetName"
                id="streetName"
                value={formData.streetName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              {errors.streetName && (
                <p className="mt-1 text-sm text-red-600">{errors.streetName}</p>
              )}
            </div>
          </div>

          {/* Project Termini */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Termini <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
              <input
                type="text"
                name="from"
                placeholder="From"
                value={formData.from}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
              <input
                type="text"
                name="to"
                placeholder="To"
                value={formData.to}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            {(errors.from || errors.to) && (
              <p className="mt-1 text-sm text-red-600">
                {errors.from || errors.to}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* UPC */}
          <div>
            <label
              htmlFor="upc"
              className="block text-sm font-medium text-gray-700"
            >
              UPC (for existing project)
            </label>
            <input
              type="text"
              name="upc"
              id="upc"
              value={formData.upc}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Funding */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Applying For <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-6 mt-1">
              <label
                htmlFor="cmaq"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="cmaq"
                  id="cmaq"
                  checked={formData.funding.cmaq}
                  onChange={handleCheckbox}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                CMAQ
              </label>
              <label
                htmlFor="cr"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="cr"
                  id="cr"
                  checked={formData.funding.cr}
                  onChange={handleCheckbox}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                CR
              </label>
              <label
                htmlFor="stbg"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  name="stbg"
                  id="stbg"
                  checked={formData.funding.stbg}
                  onChange={handleCheckbox}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                STBG
              </label>
            </div>
            {errors.funding && (
              <p className="mt-1 text-sm text-red-600">{errors.funding}</p>
            )}
          </div>

          {/* Previous Submission */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previously Submitted to FAMPO?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-6 mt-1">
              <label
                htmlFor="submittedYes"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="radio"
                  name="submittedBefore"
                  id="submittedYes"
                  value="yes"
                  checked={formData.submittedBefore === "yes"}
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                Yes
              </label>
              <label
                htmlFor="submittedNo"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="radio"
                  name="submittedBefore"
                  id="submittedNo"
                  value="no"
                  checked={formData.submittedBefore === "no"}
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                No
              </label>
            </div>
            {errors.submittedBefore && (
              <p className="mt-1 text-sm text-red-600">
                {errors.submittedBefore}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
