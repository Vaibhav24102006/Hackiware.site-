import GlassyButton from "../components/ui/GlassyButton";

const Login = () => (
  <section className="mx-auto max-w-md px-4 py-24 text-white">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h1 className="font-orbitron text-2xl uppercase tracking-[0.4em] text-hacki-cyan">
        Login
      </h1>
      <p className="mt-4 text-sm text-white/70">
        Authentication wiring will be connected later. Use this container to
        embed the upcoming auth form.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-hacki-cyan focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-hacki-cyan focus:outline-none"
        />
        <GlassyButton>Enter Vault</GlassyButton>
      </div>
    </div>
  </section>
);

export default Login;
