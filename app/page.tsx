import Image from "next/image";

const highlights = [
  {
    title: "Cinematic Lighting",
    description:
      "Layered gradients and volumetric haze carve the silhouette out of the gloom."
  },
  {
    title: "Subtle Motion",
    description:
      "Gentle parallax and animated grass convey the low, constant breath of night wind."
  },
  {
    title: "Immersive Soundscape",
    description:
      "Ambient nightfall audio completes the tableau for meditative reflection."
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="scene">
        <div className="sky" />
        <div className="moon" />
        <div className="cloud-layer cloud-layer--back" />
        <div className="cloud-layer cloud-layer--front" />

        <div className="terrain">
          <div className="grass grass--layer-a" />
          <div className="grass grass--layer-b" />
          <div className="grass grass--layer-c" />
        </div>

        <div className="samurai">
          <div className="samurai__silhouette" />
          <div className="samurai__armor-highlight" />
          <div className="samurai__katana-glint" />
        </div>
        <div className="particles" aria-hidden>
          {Array.from({ length: 18 }).map((_, idx) => (
            <span key={idx} className={`particle particle--${idx + 1}`} />
          ))}
        </div>
      </div>

      <section className="panel">
        <header className="panel__header">
          <span className="panel__tag">Visual Study</span>
          <h1>Solitude of the Blade</h1>
          <p>
            A still evening, a breath held. The lone warrior waits as moonlight
            sketches steel and stirs the tall grass. Explore the mood and motion
            behind this cinematic tableau.
          </p>
        </header>

        <ul className="panel__grid">
          {highlights.map(({ title, description }) => (
            <li key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        <footer className="panel__footer">
          <Image
            src="/signature.svg"
            alt="Signature mark"
            width={96}
            height={24}
            priority
          />
          <div>
            <span className="panel__label">Mood Board</span>
            <span>Midnight Reverie · Issue 07</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
