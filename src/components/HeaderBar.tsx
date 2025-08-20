import React from "react";
import Image from "next/image";
import { Clock as ClockIcon, Calendar } from "lucide-react";
import { formatDate, formatTime } from "@/lib/time";

type Props = {
  currentTime: Date;
};

const HeaderBar: React.FC<Props> = ({ currentTime }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-10 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg p-3">
            <Image
              src="/logo_pkc_light.png"
              alt="Pupuk Kujang Logo"
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">
              PUPUK KUJANG
            </h1>
            <p className="text-green-600 font-semibold text-2xl">
              Gate S04 - Live Monitoring
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end space-x-4 mb-3">
            <ClockIcon size={28} className="text-gray-600" />
            <div className="text-4xl font-bold text-gray-800">
              {formatTime(currentTime)}
            </div>
          </div>
          <div className="flex items-center justify-end space-x-3 text-green-600 font-medium text-lg">
            <Calendar size={20} />
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
