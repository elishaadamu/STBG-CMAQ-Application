import React, { useState } from "react";

export default function GettingStarted() {
  const [formData, setFormData] = useState({
    projectType: "",
    nepaReview: "",
    functionalClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBegin = () => {
    console.log("Selections:", formData);
    alert("Application Started with selections in console.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Getting Started
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Please use this form to apply for{" "}
          <span className="font-semibold">
            TCAMPO Surface Transportation Block Grant (STBG)
          </span>{" "}
          or{" "}
          <span className="font-semibold">
            Congestion Mitigation and Air Quality (CMAQ)
          </span>{" "}
          funding. If you have questions, please refer to the guidance document
          or contact <span className="font-semibold">Zak Mumuni</span> (
          <a
            href="mailto:zmumuni@craterpdc.org"
            className="text-blue-600 underline"
          >
            zmumuni@craterpdc.org
          </a>
          ).
        </p>

        <p className="text-red-600 font-bold text-center mb-8">
          Deadline: 11/28/2025
        </p>

        {/* Project Type */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">Project Type</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="projectType"
                value="Highway"
                checked={formData.projectType === "Highway"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Highway
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="projectType"
                value="Bike/Ped, TDM, and Transit"
                checked={formData.projectType === "Bike/Ped, TDM, and Transit"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Bike/Ped, TDM, and Transit
            </label>
          </div>
        </div>

        {/* Evaluation Factors */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">
            Required National Environmental Policy Act (NEPA) Review
          </h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="nepaReview"
                value="Categorical Exclusion (CE)"
                checked={formData.nepaReview === "Categorical Exclusion (CE)"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Categorical Exclusion (CE)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="nepaReview"
                value="Environmental Assessment (EA)"
                checked={
                  formData.nepaReview === "Environmental Assessment (EA)"
                }
                onChange={handleChange}
                className="w-4 h-4"
              />
              Environmental Assessment (EA)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="nepaReview"
                value="Environmental Impact Statement (EIS)"
                checked={
                  formData.nepaReview === "Environmental Impact Statement (EIS)"
                }
                onChange={handleChange}
                className="w-4 h-4"
              />
              Environmental Impact Statement (EIS)
            </label>
          </div>
        </div>

        {/* Functional Classification */}
        <div className="mb-8">
          <h2 className="font-bold text-lg mb-2">
            For Roadway projects, please indicate functional classification
          </h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="functionalClass"
                value="Principal Arterial"
                checked={formData.functionalClass === "Principal Arterial"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Principal Arterial
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="functionalClass"
                value="Minor Arterial"
                checked={formData.functionalClass === "Minor Arterial"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Minor Arterial
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="functionalClass"
                value="Major Collector"
                checked={formData.functionalClass === "Major Collector"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Major Collector
            </label>
          </div>
        </div>

        {/* Begin Button */}
        <div className="text-center">
          <button
            onClick={handleBegin}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Begin Application
          </button>
        </div>
      </div>
    </div>
  );
}
