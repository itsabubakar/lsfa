import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative flex  h-[85vh] items-center justify-center overflow-hidden bg-[url('/images/players/IMG-20250210-WA0028.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative flex flex-col items-center justify-center gap-10 px-5 text-center text-light md:px-14 lg:px-40">
          <h3 className="text-[28px] md:text-3xl lg:text-[72px]">About Us</h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolor, quidem doloribus debitis labore quibusdam atque suscipit quo,
            nisi qui, modi eos deleniti provident saepe deserunt maxime et ea
            corporis!
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 px-5 pb-20 text-xl md:px-10 lg:px-24">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
          non iure, architecto culpa modi nihil ab deleniti consequatur fugit.
          Facilis alias consequatur nisi laborum voluptates quasi quod itaque
          magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          tenetur neque sapiente aperiam quia sunt. Velit ab quibusdam eveniet
          consectetur placeat neque ea omnis? Culpa saepe eaque consectetur est
          repudiandae?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
          non iure, architecto culpa modi nihil ab deleniti consequatur fugit.
          Facilis alias consequatur nisi laborum voluptates quasi quod itaque
          magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          tenetur neque sapiente aperiam quia sunt. Velit ab quibusdam eveniet
          consectetur placeat neque ea omnis? Culpa saepe eaque consectetur est
          repudiandae?
        </p>

        <div className=" relative my-10">
          <Image
            className="rounded-xl shadow-solid-l"
            width={720}
            height={580}
            src="/images/players/IMG-20250210-WA0060.jpg"
            alt="Hero"
          />
          <div className="absolute inset-0 rounded-xl bg-black opacity-10"></div>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
          non iure, architecto culpa modi nihil ab deleniti consequatur fugit.
          Facilis alias consequatur nisi laborum voluptates quasi quod itaque
          magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          tenetur neque sapiente aperiam quia sunt. Velit ab quibusdam eveniet
          consectetur placeat neque ea omnis? Culpa saepe eaque consectetur est
          repudiandae?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
          non iure, architecto culpa modi nihil ab deleniti consequatur fugit.
          Facilis alias consequatur nisi laborum voluptates quasi quod itaque
          magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          tenetur neque sapiente aperiam quia sunt. Velit ab quibusdam eveniet
          consectetur placeat neque ea omnis? Culpa saepe eaque consectetur est
          repudiandae?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
          non iure, architecto culpa modi nihil ab deleniti consequatur fugit.
          Facilis alias consequatur nisi laborum voluptates quasi quod itaque
          magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          tenetur neque sapiente aperiam quia sunt. Velit ab quibusdam eveniet
          consectetur placeat neque ea omnis? Culpa saepe eaque consectetur est
          repudiandae?
        </p>
      </section>
    </div>
  );
}
