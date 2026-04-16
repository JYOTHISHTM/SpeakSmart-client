export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-slate-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800"
          />
          <button className="w-full bg-green-600 py-3 rounded-lg">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}