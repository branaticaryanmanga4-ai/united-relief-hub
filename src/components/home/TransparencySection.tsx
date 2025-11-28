import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { FileText, Download, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const TransparencySection = () => {
  const financialData = [
    { name: "Medical Programs", value: 45, color: "hsl(var(--primary))" },
    { name: "Blood Donation Camps", value: 25, color: "hsl(var(--secondary))" },
    { name: "Supply Distribution", value: 20, color: "hsl(var(--accent))" },
    { name: "Administrative", value: 10, color: "hsl(var(--muted))" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            <FileText className="h-4 w-4" />
            <span>100% Transparent Operations</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Financial Transparency
          </h2>
          <p className="text-xl text-muted-foreground">
            We believe in complete accountability. Here's exactly how your contributions are utilized.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Chart */}
          <Card className="shadow-lg animate-fade-in-up">
            <CardHeader>
              <CardTitle>Fund Allocation (2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={financialData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {financialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Where Your Money Goes</h3>
              <p className="text-muted-foreground">
                Every dollar donated is carefully allocated to maximize impact. We maintain one of the 
                lowest administrative costs in the sector at just 10%.
              </p>
            </div>

            <div className="space-y-4">
              {financialData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-foreground">{item.name}</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-secondary" asChild>
                <a href="/annual-report-2024.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Report
                </a>
              </Button>
              <Button variant="outline" asChild>
                <NavLink to="/transparency">
                  View All Financials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
