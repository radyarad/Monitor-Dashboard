"use client";

import React, { useEffect, useState } from "react";
import {
  Users,
  Briefcase,
  Wrench,
  GraduationCap,
  Building2,
} from "lucide-react";
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
import ErrorBanner from "@/components/ErrorBanner";
import StatCard from "@/components/StatCard";
import { initialData } from "@/lib/constants";
import { ConnectionStatus, GateData } from "@/lib/types";

const Page: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [data, setData] = useState<GateData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<ConnectionStatus>("online");

  // clock
  useEffect(() => {
    const t: ReturnType<typeof setInterval> = setInterval(
      () => setCurrentTime(new Date()),
      1000
    );
    return () => clearInterval(t);
  }, []);

  // initial loading
  useEffect(() => {
    const to: ReturnType<typeof setTimeout> = setTimeout(
      () => setIsLoading(false),
      800
    );
    return () => clearTimeout(to);
  }, []);

  // data refresh every 10s + error simulation
  useEffect(() => {
    const performUpdate = () => {
      setData((prev) => {
        const variance = (v: number) => {
          const variation = v * 0.02;
          const change = (Math.random() - 0.5) * 2 * variation; // ±2%
          return Math.max(0, Math.round(v + change));
        };
        const karyawanPKC = variance(prev.karyawanPKC);
        const kontraktor = variance(prev.kontraktor);
        const praktikan = variance(prev.praktikan);
        const visitor = variance(prev.visitor);
        const totalInside = karyawanPKC + kontraktor + praktikan + visitor;

        return {
          totalInside,
          karyawanPKC,
          kontraktor,
          praktikan,
          visitor,
          lastUpdate: new Date(),
        };
      });
    };

    const tick = () => {
      const err = Math.random() < 0.05; // 5% error
      if (err) {
        setStatus("error");
        const r1: ReturnType<typeof setTimeout> = setTimeout(() => {
          setStatus("reconnecting");
          const r2: ReturnType<typeof setTimeout> = setTimeout(() => {
            setStatus("online");
            performUpdate();
          }, 1000);
          return () => clearTimeout(r2);
        }, 3000);
        return () => clearTimeout(r1);
      } else {
        setStatus("online");
        performUpdate();
      }
    };

    const iv: ReturnType<typeof setInterval> = setInterval(tick, 10000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto] bg-gradient-to-br from-gray-50 to-white p-6">
      <HeaderBar currentTime={currentTime} />

      <main className="flex flex-col">
        <div className="mb-4">
          <ErrorBanner status={status} />
        </div>

        <div className="flex-1 flex flex-col">
          {/* Main Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-2">
              <StatCard
                title="Total Inside S04"
                value={data.totalInside}
                isMain
                icon={Users}
                gradient="from-green-500 to-green-600"
                isLoading={isLoading}
                status={status}
              />
            </div>

            <StatCard
              title="Karyawan PKC"
              value={data.karyawanPKC}
              icon={Briefcase}
              color="bg-blue-700 text-white"
              isLoading={isLoading}
              status={status}
            />

            <StatCard
              title="Visitor"
              value={data.visitor}
              icon={Building2}
              color="bg-yellow-500 text-white"
              isLoading={isLoading}
              status={status}
            />
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              title="PHL & Kontraktor"
              value={data.kontraktor}
              icon={Wrench}
              color="bg-red-600 text-white"
              isLoading={isLoading}
              status={status}
            />

            <StatCard
              title="Praktikan"
              value={data.praktikan}
              icon={GraduationCap}
              color="bg-purple-600 text-white"
              isLoading={isLoading}
              status={status}
            />
          </div>
        </div>
      </main>

      <FooterBar />
    </div>
  );
};

export default Page;
