import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    BarChart3,
    Building2,
    Calendar,
    ExternalLink,
    Globe2,
    Library,
    LineChart,
    Shield, UserRoundPlus
} from 'lucide-react'
import {Card} from "@/components/ui/card";
import Typography from "@/@core/components/typography";
import {Chip} from "@/components/ui/chip";
import IconButton from "@/components/ui/IconButton";

interface Project {
    name: string
    description: string
    icon: JSX.Element
    iconColor: string
    client: string
    type: string
    status: "Completed" | "In Progress" | "On Hold"
    lastUpdated: string
}

const projects: Project[] = [
    {
        name: "Enterprise Resource Planning",
        description: "Cloud-based ERP solution for manufacturing",
        icon: <Building2 className="w-5 h-5" />,
        iconColor: "text-blue-600 dark:text-blue-400",
        client: "Industrial Corp.",
        type: "Enterprise Software",
        status: "Completed",
        lastUpdated: "2024-02-15",
    },
    {
        name: "Financial Analytics Platform",
        description: "Real-time market analysis dashboard",
        icon: <LineChart className="w-5 h-5" />,
        iconColor: "text-emerald-600 dark:text-emerald-400",
        client: "Global Finance Ltd.",
        type: "Data Analytics",
        status: "In Progress",
        lastUpdated: "2024-02-20",
    },
    {
        name: "Digital Asset Management",
        description: "Enterprise content management system",
        icon: <Library className="w-5 h-5" />,
        iconColor: "text-purple-600 dark:text-purple-400",
        client: "Media Group Inc.",
        type: "Content Platform",
        status: "Completed",
        lastUpdated: "2024-02-18",
    },
    {
        name: "Cyber security Suite",
        description: "Advanced threat detection system",
        icon: <Shield className="w-5 h-5" />,
        iconColor: "text-red-600 dark:text-red-400",
        client: "SecureNet Solutions",
        type: "Security",
        status: "In Progress",
        lastUpdated: "2024-02-22",
    },
    {
        name: "Business Intelligence Tool",
        description: "Data visualization and reporting platform",
        icon: <BarChart3 className="w-5 h-5" />,
        iconColor: "text-amber-600 dark:text-amber-400",
        client: "Analytics Corp.",
        type: "Business Intelligence",
        status: "Completed",
        lastUpdated: "2024-02-19",
    },
    {
        name: "Global Trading Platform",
        description: "Multi-currency trading system",
        icon: <Globe2 className="w-5 h-5" />,
        iconColor: "text-indigo-600 dark:text-indigo-400",
        client: "Trade Solutions Ltd.",
        type: "Financial Services",
        status: "On Hold",
        lastUpdated: "2024-02-17",
    },
]
function getChipStatus(status: string){
    switch (status){
        case 'Completed':{
            return <Chip label={status} variant={'success'}/>
        }
        case 'In Progress':{
            return <Chip label={status} variant={'warning'}/>
        }
        case 'On Hold':{
            return <Chip label={status} variant={'error'}/>
        }
    }
}

export  const UserProjects=()=> {
    return (
        <Card className="space-y-4">
            <div className="flex justify-between items-center px-6 pt-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Project Portfolio</h1>
                    <p className="text-sm text-muted-foreground">
                        Overview of enterprise solutions and implementations
                    </p>
                </div>
                <Button>
                    <UserRoundPlus size={'19px'} />
                    New Project
                </Button>
            </div>

            <div className="rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="w-[400px]">Project</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className={"p-2 rounded-lg"}>
                                            <div className={project.iconColor}>{project.icon}</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">{project.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{project.client}</TableCell>
                                <TableCell>
                                    <Typography >{project.type}</Typography>
                                </TableCell>
                                <TableCell>
                                        {getChipStatus(project.status)}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(project.lastUpdated).toLocaleDateString()}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <ExternalLink className="w-4 h-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}

