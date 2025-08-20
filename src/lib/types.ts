export type GateData = {
  totalInside: number;
  karyawanPKC: number;
  kontraktor: number; // PHL & Kontraktor
  praktikan: number;
  visitor: number;
  lastUpdate: Date;
};

export type ConnectionStatus = "online" | "error" | "reconnecting";
