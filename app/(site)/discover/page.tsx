import PlayerDiscover from "@/components/Features/allPlayers";
import featuresData from "@/components/Features/featuresData";
import SingleFeature from "@/components/Features/SingleFeature";

export default function Discover(){
    return (
        <div className="flex flex-col gap-20">
            <section className="relative bg-[url('/images/players/IMG-20250210-WA0033.jpg')]  overflow-hidden h-[85vh] bg-center bg-no-repeat bg-cover flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 text-center justify-center items-center text-light relative">
                    <p className="text-lg">Football Player Catalogue</p>
                    <h3 className="text-[28px] md:text-3xl lg:text-[72px]">Find The Player You Need</h3>
                    <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, quidem doloribus debitis labore quibusdam atque suscipit quo, nisi qui, modi eos deleniti provident saepe deserunt maxime et ea corporis!</p>
                </div>
                
            </section>

            <section className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 justify-center">
                <div className="flex flex-col gap-10 text-center">
                    <h3 className="text-[28px] text-titlebgdark">Academy Players - Elite Player Profiles</h3>
                    <p className="text-lg md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eos a nulla ipsa maiores quod dolorum neque inventore laudantium eveniet adipisci, ex eaque consectetur placeat excepturi. Alias id doloremque dolores!</p>

                </div>

                <div>
                    
                </div>
                
            </section>
        </div>
    )
}