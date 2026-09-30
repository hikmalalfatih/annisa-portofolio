export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-2xl text-base leading-7 text-zinc-400 ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
