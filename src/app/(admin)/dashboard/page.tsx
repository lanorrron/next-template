'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { FiDollarSign } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Chip} from "@/components/ui/chip";
import {totalMonth,products, recentOrders} from "@/@fake-db/dashboard/mockDashboard";
const Dashboard = ()=>{
    const getVariantForStatus = (status: string): 'error' | 'success' | 'warning' | 'info' | 'default' => {
        switch (status.toLowerCase()) {
            case 'shipped':
                return 'info';
            case 'processing':
                return 'warning';
            case 'delivered':
                return 'success';
            case 'pending':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <div>
            <div className={'mt-3'}>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <Card className={'bg-primary/15 p-2 border-none'}>
                                <FiDollarSign className={'text-primary'}></FiDollarSign>
                            </Card>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Orders</CardTitle>
                            <Card className={'bg-primary/15 p-2 border-none'}>
                                <LuUsers className={'text-primary'}/>
                            </Card>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <Card className={'bg-primary/15 p-2 border-none'}>
                                <FiCreditCard className={'text-primary'}/>
                            </Card>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                            <Card className={'bg-primary/15 p-2 border-none'}>
                                <MdShowChart className={'text-primary'}/>
                            </Card>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
                <div className=" mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350} className={' flex overflow-auto'}>
                                <BarChart data={totalMonth}>
                                    <Tooltip contentStyle={{
                                        background: "hsl(var(--card))",
                                        borderRadius:"10px",
                                        border: "none",
                                    }} cursor={{fill: "hsl(var(--accent))", radius: 5}}
                                    />
                                    <XAxis
                                        dataKey="name"
                                        stroke="hsl(var(--foreground))"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="hsl(var(--foreground))"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card className="col-span-4 overflow-auto">
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                            <CardDescription>
                                You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Order</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentOrders?.map((order) => (
                                        <TableRow key={order.id}>
                                            <TableCell className="font-medium">{order.id}</TableCell>
                                            <TableCell>{order.customer}</TableCell>
                                            <TableCell><Chip variant={getVariantForStatus(order.status)} label={order.status}/></TableCell>
                                            <TableCell className="text-right">{order.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        A list of products for your store.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Stock</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img src={product.image} alt={product.name} className="h-12 w-12 rounded-md object-cover" />
                                    </TableCell>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    )
}
export default Dashboard