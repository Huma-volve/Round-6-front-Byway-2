import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  } from "recharts";
  
  const data = [
    { name: 'Jan', uv: 2000, amt: 4200 },
    { name: 'Feb', uv: 1500, amt: 1000 },
    { name: 'Mar', uv: 4100, amt: 8100 },
    { name: 'Apr', uv: 1000, amt: 2000 },
    { name: 'May', uv: 1050, amt: 4200 },
    { name: 'Jun', uv: 8000, amt: 1900 },
    { name: 'Jul', uv: 2000, amt: 7800 },
    { name: 'Aug', uv: 4100, amt: 2200 },
    { name: 'Sep', uv: 1000, amt: 2300 },
    { name: 'Oct', uv: 5000, amt: 0 },
    { name: 'Nov', uv: 4500, amt: 2500 },
    { name: 'Dec', uv: 3500, amt: 1200 },
  ];
  
  export default function OverlappingAreaChart() {
    return (
      <div className="w-full h-96">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
  
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
  
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#3b82f6"
              fill="url(#colorUv)"
              strokeWidth={2}
              name="Chosen Period"
            />
  
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#14b8a6"
              fill="url(#colorAmt)"
              strokeWidth={2}
              name="Last Period"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  