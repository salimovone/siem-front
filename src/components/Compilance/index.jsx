import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card } from "@mui/material";
import CardTitle from "../CardTitle";

export default function Compilance() {
    return (
        <Card>
            <CardTitle title={"Compilance"} />
            <PieChart
                series={[
                    {
                        innerRadius: 60, // donut effektini hosil qiladi
                        outerRadius: 100,
                        data: [
                            { id: 0, value: 10, label: "Frontend" },
                            { id: 1, value: 15, label: "Backend" },
                            { id: 2, value: 20, label: "DevOps" },
                        ],
                    },
                ]}
                width={350}
                height={220}
                slotProps={{
                    legend: { hidden: true },
                }}
            />
        </Card>
    );
}
