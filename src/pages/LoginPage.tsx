export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        <div className="space-y-4">
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
          <button className="w-full bg-blue-600 py-3 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}