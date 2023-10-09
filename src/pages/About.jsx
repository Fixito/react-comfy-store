const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-4xl font-bold tracking-widest text-primary-content">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error
        adipisci, quis consequuntur illum minima eaque vero unde animi
        praesentium molestias. Vero iste odio reiciendis, id similique
        praesentium sed impedit officiis deleniti tempore debitis eum, delectus
        ipsa possimus eaque et?
      </p>
    </>
  );
};
export default About;
