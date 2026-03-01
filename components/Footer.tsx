import Link from "next/link";
import { Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
                            AA<span className="text-primary">Hub</span>
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed">
                            Abandoned Animal Hub.<br />
                            우리는 모든 유기동물이 버려진 상처를 뒤로하고<br />
                            새로운 삶을 찾을 수 있도록 돕습니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">입양 & 쉘터</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/adopt" className="hover:text-white transition-colors">입양 대기 동물</Link></li>
                            <li><Link href="/shelter/kr" className="hover:text-white transition-colors">국내 보호소 목록</Link></li>
                            <li><Link href="/shelter/world" className="hover:text-white transition-colors">해외 파트너 쉘터</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">후원 & 채널</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/donate" className="hover:text-white transition-colors">정기 후원 신청</Link></li>
                            <li><Link href="/report" className="hover:text-white transition-colors">투명성 리포트</Link></li>
                            <li><Link href="/channel" className="hover:text-white transition-colors">유튜브 채널</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] text-white/20 uppercase tracking-widest">
                        © 2024 AAHub Project. All Rights Reserved.
                    </div>
                    <div className="flex space-x-6 text-[10px] text-white/30 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                <div className="mt-8 text-[10px] text-white/10 leading-relaxed text-center md:text-left">
                    상호명: (주)AAHub 프로젝트 | 대표자: 사용자 | 사업자등록번호: 000-00-00000 | 주소: 서울특별시 어딘가<br />
                    통신판매업신고: 제 2024-서울-0000호 | 고객센터: help@aahub.org
                </div>
            </div>
        </footer>
    );
}
