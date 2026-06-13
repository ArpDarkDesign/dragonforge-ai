import { Reveal } from './Reveal'

export function SectionHeader({ eyebrow, title, copy }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase text-amber-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
        {copy}
      </p>
    </Reveal>
  )
}
