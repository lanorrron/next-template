import {UserInfo} from "@/modules/user/components/UserInfo";
import {UserSkills} from "@/modules/user/components/UserSkills";
import {UserProjects} from "@/modules/user/components/UserProjects";

function Page() {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-12 gap-2'}>
            <div className={'md:col-span-5'}>
                <UserInfo></UserInfo>
            </div>
            <div className={'space-y-2 md:col-span-7 '}>
                <UserSkills></UserSkills>
                <UserProjects></UserProjects>
            </div>
        </div>
    )
}

export default Page