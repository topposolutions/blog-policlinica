const Banner = () => {
  return (
    <div className="flex items-center justify-between py-10   lg:py-5">
      <div className="space-y-5 px-8 xl:px-0">
        <div className="w-[80%]">
          <h1 className="max-w-xl  pb-1 text-3xl font-medium text-blue md:text-6xl">
            POLICLÍNICA
          </h1>
          <span className="text-sm md:text-base">
            Diariamente um novo artigo, nova experiência e um estilo de vida
            ainda mais SAUDÁVEL!
            {/* porque cuidar da sua saúde é um carinho que
            você MERECE! */}
          </span>
        </div>
      </div>

      <img
        className="hidden h-48 md:inline-flex lg:h-72 xl:h-96"
        src="/logoBanner.svg"
        alt=""
      />
    </div>
  )
}

export default Banner
