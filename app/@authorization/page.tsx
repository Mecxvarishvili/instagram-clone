import LogInForm from "@/components/LogInForm";
import Image from "next/image";
import Link from "next/link";
import PhoneSlider from "./PhoneSlider";

export default function LogInSlot () {
    return  (
        <div className="flex justify-center" >
            <PhoneSlider />
            <LogInForm />
        </div>
    )
}