import { useEffect, useState } from "react";
import ReactApexChart, { Props } from "react-apexcharts";

export default function ApexChart(props: Props) {
  const [Chart, setChart] = useState<typeof ReactApexChart>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setChart(() => require("react-apexcharts").default);
    }
  }, []);

  return Chart ? <Chart {...props} /> : <div className="h-full" />;
}
