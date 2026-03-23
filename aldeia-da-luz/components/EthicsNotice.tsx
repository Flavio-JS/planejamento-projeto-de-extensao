import { FaExclamationTriangle } from "react-icons/fa";
import type { EthicsNoticeContent } from "@/types/global";

interface EthicsNoticeProps {
  content: EthicsNoticeContent;
}

export default function EthicsNotice({ content }: EthicsNoticeProps) {
  return (
    <section className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <FaExclamationTriangle className="text-white text-xl" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-1">
              {content.title}
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
