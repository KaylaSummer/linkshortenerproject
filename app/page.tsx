import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Link2,
  MousePointer2,
  Send,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const features = [
  {
    number: "01",
    icon: WandSparkles,
    title: "Long links, meet their match.",
    description:
      "Turn a long, unwieldy URL into a short link that’s easy to read, share, and remember.",
  },
  {
    number: "02",
    icon: MousePointer2,
    title: "Simple by design.",
    description:
      "Skip the complicated setup. Create a link in a few steps and get straight to sharing.",
  },
  {
    number: "03",
    icon: Send,
    title: "Ready to go anywhere.",
    description:
      "Add a tidy link to a message, a post, a presentation, or wherever people need to find you.",
  },
];

const steps = [
  {
    number: "01",
    title: "Bring your long link",
    description: "Start with the URL you want to share.",
  },
  {
    number: "02",
    title: "Make it short",
    description: "Create a cleaner, more convenient link.",
  },
  {
    number: "03",
    title: "Share it everywhere",
    description: "Copy your new link and pass it along.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fcfbf8] text-[#18231f]">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label="LinkShortener home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#c5f277] text-[#18231f]">
            <Link2 aria-hidden="true" className="size-5" strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-bold tracking-[-0.04em]">
            LinkShortener
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-[#68726d] transition-colors hover:text-[#18231f]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-[#68726d] transition-colors hover:text-[#18231f]"
          >
            How it works
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Show when="signed-out">
            <SignInButton mode="redirect">
              <button
                type="button"
                className="rounded-full px-3 py-2 text-sm font-semibold text-[#45504a] transition-colors hover:bg-[#f0efe9] sm:px-4"
              >
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="redirect">
              <button
                type="button"
                className="rounded-full bg-[#18231f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#30413a] sm:px-5"
              >
                Get started
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dbe8ca] bg-[#f4f8ed] px-3.5 py-2 text-xs font-semibold tracking-[0.02em] text-[#526c3d]">
            <span className="size-1.5 rounded-full bg-[#8ab84b]" />
            GOOD LINKS. NO LONG URLS.
          </div>
          <h1 className="max-w-[650px] text-[clamp(3.2rem,7vw,6.1rem)] leading-[0.97] font-semibold tracking-[-0.075em] text-[#18231f]">
            Make long links
            <span className="block text-[#789d45]">a little shorter.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#68726d] sm:text-lg sm:leading-8">
            The easiest way to turn a long URL into a link that’s neat, easy to
            share, and ready to go wherever you do.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <SignUpButton mode="redirect">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#18231f] px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#30413a]"
              >
                Create your first link
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </SignUpButton>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#e4e4dc] px-6 text-sm font-semibold text-[#45504a] transition-colors hover:border-[#c7cec3] hover:bg-white"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs font-medium text-[#7b837e]">
            <Check aria-hidden="true" className="size-4 text-[#789d45]" />
            Less clutter. More sharing.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -right-10 -top-12 size-44 rounded-full bg-[#e5efcf] blur-3xl sm:size-64" />
          <div className="absolute -bottom-14 -left-12 size-48 rounded-full bg-[#f5e8d4] blur-3xl sm:size-64" />
          <div className="relative rounded-[28px] border border-[#e9e8df] bg-white p-4 shadow-[0_30px_90px_-42px_rgba(44,57,47,0.3)] sm:rounded-[32px] sm:p-6">
            <div className="flex items-center justify-between border-b border-[#f0f0eb] pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-[#f4f8ed] text-[#789d45]">
                  <Link2 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Your link, simplified</p>
                  <p className="mt-0.5 text-xs text-[#8b938e]">A little less to type</p>
                </div>
              </div>
              <span className="rounded-full bg-[#f2f7e9] px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[#6f9143]">
                READY
              </span>
            </div>

            <div className="mt-6">
              <p className="mb-2.5 text-[11px] font-bold tracking-[0.12em] text-[#8b938e] uppercase">
                Your original link
              </p>
              <div className="overflow-hidden rounded-2xl border border-[#eeeee8] bg-[#fbfbf8] px-4 py-3.5 text-sm text-[#8b938e]">
                example.com/articles/a-better-way-to-share
              </div>
            </div>

            <div className="my-4 flex justify-center">
              <span className="flex size-8 items-center justify-center rounded-full border border-[#e9e8df] bg-white text-[#91a47a]">
                <ArrowRight aria-hidden="true" className="size-4 rotate-90" />
              </span>
            </div>

            <div>
              <p className="mb-2.5 text-[11px] font-bold tracking-[0.12em] text-[#8b938e] uppercase">
                Your shorter link
              </p>
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#dce8cb] bg-[#f8fbf3] px-4 py-3.5">
                <span className="truncate text-sm font-semibold text-[#58763a]">
                  linkshortener.com/your-link
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#c5f277] text-[#344627]">
                  <Check aria-hidden="true" className="size-4" />
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#18231f] px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-white/10">
                  <Send aria-hidden="true" className="size-4" />
                </span>
                <span className="text-sm font-medium">Ready when you are</span>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-4 text-[#c5f277]" />
            </div>
          </div>
          <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-[#e9e8df] bg-white/90 px-4 py-3 shadow-sm sm:absolute sm:-bottom-7 sm:-left-10 sm:mt-0 sm:w-[210px]">
            <div>
              <p className="text-xs font-semibold text-[#354139]">One clean link</p>
              <p className="mt-1 text-[11px] text-[#8b938e]">Easy to pass along</p>
            </div>
            <span className="flex size-9 items-center justify-center rounded-full bg-[#f4f8ed] text-[#789d45]">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-[#eeede6] bg-white/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#789d45] uppercase">
                The little things matter
              </p>
              <h2 className="max-w-lg text-3xl leading-tight font-semibold tracking-[-0.055em] sm:text-4xl">
                Sharing a link should feel easy.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#68726d]">
              Make your next link cleaner in just a few steps, then share it
              wherever you need.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="rounded-[24px] border border-[#eeede6] bg-[#fcfbf8] p-6 sm:p-7"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#eef5e3] text-[#789d45]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-[#a2a8a1]">{number}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#737d76]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#789d45] uppercase">
              Three steps, tops
            </p>
            <h2 className="max-w-md text-3xl leading-tight font-semibold tracking-[-0.055em] sm:text-4xl">
              From too long to just right.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#68726d]">
              No fuss, no long setup. Just a simpler way to get your links out
              into the world.
            </p>
            <SignUpButton mode="redirect">
              <button
                type="button"
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#18231f] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#30413a]"
              >
                Get started
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </SignUpButton>
          </div>

          <ol className="divide-y divide-[#e9e8df]">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[44px_1fr] gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[56px_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs font-semibold text-[#8ba967]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#737d76]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#18231f] px-6 py-12 text-white sm:rounded-[32px] sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-28 size-72 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-16 size-48 rounded-full border border-white/10" />
          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#c5f277] uppercase">
                Your next link starts here
              </p>
              <h2 className="max-w-xl text-3xl leading-tight font-semibold tracking-[-0.055em] sm:text-4xl">
                Make room for better sharing.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Create an account and make your first link a shorter one.
              </p>
            </div>
            <SignUpButton mode="redirect">
              <button
                type="button"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#c5f277] px-6 text-sm font-semibold text-[#24311d] transition-colors hover:bg-[#d3f894]"
              >
                Get started for free
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </SignUpButton>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-[#8b938e] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[#45504a]">
          <Link2 aria-hidden="true" className="size-4 text-[#789d45]" />
          LinkShortener
        </Link>
        <p>Short links. Clear sharing.</p>
      </footer>
    </main>
  );
}
