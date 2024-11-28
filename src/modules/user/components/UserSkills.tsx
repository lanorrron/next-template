import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Typography from "@/@core/components/typography";
import {Chip} from "@/components/ui/chip";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";


interface Skill {
    name: string
    proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"
    yearsOfExperience: number
}

const skills: Skill[] = [
    {name: "JavaScript", proficiency: "Expert", yearsOfExperience: 8},
    {name: "React", proficiency: "Advanced", yearsOfExperience: 5},
    {name: "Node.js", proficiency: "Intermediate", yearsOfExperience: 3},
    {name: "Python", proficiency: "Beginner", yearsOfExperience: 1},
    {name: "TypeScript", proficiency: "Advanced", yearsOfExperience: 4},
]

export const UserSkills = () => {
    function getChipProficiency(proficiency: string) {
        switch (proficiency) {
            case 'Expert': {
                return <Chip label={proficiency} variant={'error'}/>
            }
            case 'Advanced': {
                return <Chip label={proficiency} variant={'warning'}/>
            }
            case 'Intermediate': {
                return <Chip label={proficiency} variant={'info'}/>
            }
            case 'Beginner': {
                return <Chip label={proficiency} variant={'success'}/>
            }
            default:{
                return <Chip label={proficiency}/>
            }
        }
    }
    function getIconSkill(skill: string){
        switch (skill.toLowerCase()){
            case 'javascript':{
                return <IoLogoJavascript className={'text-yellow-400 '}/>
            }
            case 'react':{
                return <FaReact className={'text-blue-400'}/>
            }
            case 'node.js':{
                return <FaNode className={'text-green-400 '}/>
            }
            case 'python':{
                return <FaPython className={'text-blue-400 '}/>
            }
            case 'typescript':{
                return <TbBrandTypescript className={'text-blue-400 '}/>
            }
        }
    }

    return (
        <Card>
            <div className={'p-3'}>
                <Typography variant={'h4'}>Developer Skills</Typography>

            </div>
            <Table>
                <TableHeader className={'bg-accent/90'}>
                    <TableRow>
                        <TableHead className="w-[200px]">Skill</TableHead>
                        <TableHead>Proficiency</TableHead>
                        <TableHead className="text-right">Years of Experience</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {skills.map((skill) => (
                        <TableRow key={skill.name}>
                            <TableCell className="font-medium">{<div     className={'flex items-center gap-2'}><span className={'text-xl'}>{getIconSkill(skill.name)} </span>{skill.name}</div>}</TableCell>
                            <TableCell>
                                {getChipProficiency(skill.proficiency)}
                            </TableCell>
                            <TableCell className="text-right">{skill.yearsOfExperience}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}