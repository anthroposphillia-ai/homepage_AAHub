import { Youtube, Instagram, Twitter } from "lucide-react"; // lucide-react 아이콘 사용

export default function ChannelHub() {
    return (
        <section className="py-24 bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Actual Narrative</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            보호소에서 직접 <br /> 촬영한 <span className="italic">실제 이야기</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-10 leading-relaxed">
                            우리는 필터 없이 그들의 눈동자를 담습니다. 버려진 공포, 기다림의 지침, 그리고 생존을 향한 갈급함까지.
                            영상을 통해 유입된 수익은 전액 유기동물의 사료와 치료비로 사용됩니다.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all">
                                <Youtube size={20} className="text-red-600" />
                                <span className="font-bold">YouTube</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all">
                                <Instagram size={20} className="text-pink-600" />
                                <span className="font-bold">Instagram</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all">
                                <Twitter size={20} className="text-blue-400" />
                                <span className="font-bold">TikTok</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            {/* YouTube IFrame Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                                <button className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-1" />
                                </button>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200"
                                alt="Latest Video"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="bg-red-600 px-2 py-1 text-[10px] font-bold rounded mb-2 inline-block uppercase">Latest Upload</span>
                                <h3 className="text-xl font-bold">"나를 기억해 주세요" - 쉘터 안의 72시간</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
