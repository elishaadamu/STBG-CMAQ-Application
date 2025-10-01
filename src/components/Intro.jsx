import React, { useState } from "react";

export default function GettingStarted() {
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
            <ul className="list-disc list-inside ml-4">
              <li>Highway</li>
              <li>Bike/Ped, TDM, and Transit</li>
            </ul>
          </div>
        </div>

        {/* Evaluation Factors */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">
            Required National Environmental Policy Act (NEPA) Review
          </h2>
          <div className="space-y-2">
            <ul className="list-disc list-inside ml-4">
              <li>Categorical Exclusion (CE)</li>
              <li>Environmental Assessment (EA)</li>
              <li>Environmental Impact Statement (EIS)</li>
            </ul>
          </div>
        </div>

        {/* Functional Classification */}
        <div className="mb-8">
          <h2 className="font-bold text-lg mb-2">
            For Roadway projects, please indicate functional classification
          </h2>
          <div className="space-y-2">
            <ul className="list-disc list-inside ml-4">
              <li>Principal Arterial</li>
              <li>Minor Arterial</li>
              <li>Major Collector</li>
            </ul>
          </div>
        </div>

        {/* Begin Button */}
        <div className="text-center">
          <a
            href="#form"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Begin Application
          </a>
        </div>
      </div>
    </div>
  );
}
