import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    gender: "Male",
    level: "Advanced (C1)",
    age: "28",
    country: "United States",
    state: "California",
    status: "Student",
    goal: "Improving conversational fluency for professional environments and networking.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#eef1ff]">
      
      {/* ✅ Navbar full width */}
      <Navbar />

      {/* ✅ Page Content */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                👤
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-indigo-600 rounded-full"></div>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">Alex</h2>
            <span className="mt-1 text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-500">
              ADVANCED LEARNER
            </span>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />

            <Select label="Gender" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female"]} />
            <Select label="English Level" name="level" value={form.level} onChange={handleChange} options={["Beginner", "Intermediate", "Advanced (C1)"]} />

            <Input label="Age" name="age" value={form.age} onChange={handleChange} />
            <Select label="Country" name="country" value={form.country} onChange={handleChange} options={["United States", "India"]} />

            <Input label="State / Region" name="state" value={form.state} onChange={handleChange} />
            <Input label="Current Status" name="status" value={form.status} onChange={handleChange} />
          </div>

          {/* Goal */}
          <div className="mt-4">
            <label className="text-sm text-gray-600">Primary Learning Goal</label>
            <textarea
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black text-sm"
              rows={3}
            />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        {...props}
        className="w-full mt-1 p-2 rounded-lg bg-gray-100 border border-gray-200 text-sm"
      />
    </div>
  );
}

function Select({ label, options, ...props }: any) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <select
        {...props}
        className="w-full mt-1 p-2 rounded-lg bg-gray-100 border border-gray-200 text-sm"
      >
        {options.map((opt: string) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}